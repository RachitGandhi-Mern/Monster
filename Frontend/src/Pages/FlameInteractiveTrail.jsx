import React, { useState, useEffect, useRef, useCallback } from 'react';

const FlameInteractiveTrail = () => {
  const containerRef = useRef(null);
  const speedIndicatorRef = useRef(null);
  const [currentEffect, setCurrentEffect] = useState('flame');
  const [textVisible, setTextVisible] = useState(false);
  const [rotatedTextVisible, setRotatedTextVisible] = useState(false);

  // Trail state
  const trailRef = useRef([]);
  const mousePositionRef = useRef({ x: 0, y: 0, lastX: 0, lastY: 0, prevX: 0, prevY: 0 });
  const stateRef = useRef({
    isMoving: false,
    isCursorInContainer: false,
    isTouching: false,
    isScrolling: false,
    smoothedSpeed: 0,
    maxSpeed: 0,
    imageIndex: 0,
    lastMoveTime: Date.now()
  });

  const isMobile = typeof window !== 'undefined' && 
    (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth <= 768);

  const config = {
    imageCount: 14,
    imageLifespan: 600,
    removalDelay: 16,
    mouseThreshold: isMobile ? 20 : 40,
    inDuration: 600,
    outDuration: 800,
    touchImageInterval: 40,
    minMovementForImage: isMobile ? 3 : 5,
    baseImageSize: isMobile ? 180 : 240,
    minImageSize: isMobile ? 120 : 160,
    maxImageSize: isMobile ? 260 : 340,
    baseRotation: 30,
    maxRotationFactor: 3,
    speedSmoothingFactor: 0.25,
    staggerRange: 50
  };

  const images = [
    "https://www.commercialdist.com/assets/images/6/BeastUnleashed_Cans-khnt7wpm0b45fm8.jpg",
    "https://web-assests.monsterenergy.com/mnst/60126e30-7abe-43d8-a5f5-b0a9b970024f.png",
    "https://www.overwolf.com/.content/assets/images/revenue/img/social-monster.jpg",
    "https://web-assests.monsterenergy.com/mnst/c5584f56-3f45-496c-bb3c-807162669978.png",
    "https://web-assests.monsterenergy.com/mnst/7693e8f9-4190-4749-baba-5717e704396c.png",
   
  ];

  const textItems = [
  ['Energy', 'Rush', 'Power', 'Fuel', 'Surge', 'Adrenaline', 'Ignite', 'Voltage', 'Burst', 'Charge', 'Unleashed', 'Overdrive', 'Amped', 'Pulse', 'Throttle'],
  ['Extreme', 'Rebel', 'Untamed', 'Savage', 'NoLimits', 'Hardcore', 'Xtreme', 'Edge', 'Grind', 'Wired', 'Thrill', 'Burnout', 'Speed', 'Chaos', 'Breakout'],
  ['Monster', 'Alpha', 'Instinct', 'Legacy', 'Victory', 'Raw', 'Dominate', 'Fearless', 'Champion', 'Crave', 'Fury', 'Uncaged', 'Strike', 'Force', 'Legend']
];

  const rotatedItems = [
  'Shockwave',
  'Nitro Pulse',
  'Fuelborn',
  'Neon Venom',
  'Savage Surge'
];

  const effects = [
    { id: 'flame', name: 'Flame' },
    { id: 'venetian', name: 'Venetian' },
    { id: 'curtain', name: 'Curtain' },
    { id: 'hexagon', name: 'Hexagon' },
    { id: 'liquid', name: 'Liquid' },
    { id: 'zoomsplit', name: 'Zoom Split' }
  ];

  // Text animations
  useEffect(() => {
    const timer1 = setTimeout(() => setTextVisible(true), 200);
    const timer2 = setTimeout(() => setRotatedTextVisible(true), 800);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const isInContainer = useCallback((x, y) => {
    if (!containerRef.current) return false;
    const rect = containerRef.current.getBoundingClientRect();
    return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
  }, []);

  const hasMovedEnough = useCallback(() => {
    const { x, y, lastX, lastY } = mousePositionRef.current;
    const dx = x - lastX;
    const dy = y - lastY;
    return Math.hypot(dx, dy) > config.mouseThreshold;
  }, []);

  const hasMovedAtAll = useCallback(() => {
    const { x, y, prevX, prevY } = mousePositionRef.current;
    const dx = x - prevX;
    const dy = y - prevY;
    return Math.hypot(dx, dy) > config.minMovementForImage;
  }, []);

  const calculateSpeed = useCallback(() => {
    const now = Date.now();
    const { x, y, prevX, prevY } = mousePositionRef.current;
    const dt = now - stateRef.current.lastMoveTime;
    
    if (dt <= 0) return 0;
    
    const dist = Math.hypot(x - prevX, y - prevY);
    const raw = dist / dt;
    
    if (raw > stateRef.current.maxSpeed) stateRef.current.maxSpeed = raw;
    
    const norm = Math.min(raw / (stateRef.current.maxSpeed || 0.5), 1);
    stateRef.current.smoothedSpeed = 
      stateRef.current.smoothedSpeed * (1 - config.speedSmoothingFactor) +
      norm * config.speedSmoothingFactor;
    
    stateRef.current.lastMoveTime = now;
    
    // Update speed indicator
    if (speedIndicatorRef.current) {
      const effectName = effects.find(e => e.id === currentEffect)?.name || 'Flame';
      speedIndicatorRef.current.textContent = `${effectName} Intensity: ${(stateRef.current.smoothedSpeed * 100).toFixed(0)}%`;
      speedIndicatorRef.current.style.opacity = '1';
      
      clearTimeout(speedIndicatorRef.current.hideTimeout);
      speedIndicatorRef.current.hideTimeout = setTimeout(() => {
        if (speedIndicatorRef.current) {
          speedIndicatorRef.current.style.opacity = '0';
        }
      }, 1500);
    }
    
    return stateRef.current.smoothedSpeed;
  }, [currentEffect]);

  const createFlameImage = useCallback((speed = 0.5) => {
    if (!containerRef.current) return;
    
    const imageSrc = images[stateRef.current.imageIndex];
    stateRef.current.imageIndex = (stateRef.current.imageIndex + 1) % images.length;

    const size = config.minImageSize + (config.maxImageSize - config.minImageSize) * speed;
    const rotFactor = 1 + speed * (config.maxRotationFactor - 1);
    const rot = (Math.random() - 0.5) * config.baseRotation * rotFactor;

    const img = document.createElement('img');
    img.src = imageSrc;
    img.width = img.height = size;
    
    const rect = containerRef.current.getBoundingClientRect();
    const { x, y } = mousePositionRef.current;
    const relativeX = x - rect.left;
    const relativeY = y - rect.top;

    img.style.cssText = `
      position: absolute;
      left: ${relativeX}px;
      top: ${relativeY}px;
      transform: translate(-50%, -50%) rotate(${rot}deg) scale(0);
      transition: transform ${config.inDuration}ms cubic-bezier(.07,.5,.5,1);
      pointer-events: none;
      will-change: transform;
      z-index: 50;
    `;

    containerRef.current.appendChild(img);

    // Animate in
    requestAnimationFrame(() => {
      img.style.transform = `translate(-50%, -50%) rotate(${rot}deg) scale(1)`;
    });

    // Store for cleanup
    const trailItem = {
      element: img,
      rotation: rot,
      removeTime: Date.now() + config.imageLifespan,
      isFlame: true
    };

    trailRef.current.push(trailItem);

    // Schedule removal
    setTimeout(() => {
      img.style.transition = `transform ${config.outDuration}ms cubic-bezier(.87, 0, .13, 1)`;
      img.style.transform = `translate(-50%, -50%) rotate(${rot + 360}deg) scale(0)`;
      
      setTimeout(() => {
        if (img.parentNode) {
          img.parentNode.removeChild(img);
        }
        // Remove from trail array
        const index = trailRef.current.findIndex(item => item.element === img);
        if (index > -1) {
          trailRef.current.splice(index, 1);
        }
      }, config.outDuration);
    }, config.imageLifespan);

  }, []);

  const createTrailImage = useCallback(() => {
    if (!stateRef.current.isCursorInContainer) return;
    
    if ((stateRef.current.isMoving || stateRef.current.isTouching) && hasMovedEnough() && hasMovedAtAll()) {
      const { x, y } = mousePositionRef.current;
      mousePositionRef.current.lastX = x;
      mousePositionRef.current.lastY = y;
      
      const speed = calculateSpeed();
      
      // For now, only implement flame effect
      if (currentEffect === 'flame') {
        createFlameImage(speed);
      }
      
      mousePositionRef.current.prevX = x;
      mousePositionRef.current.prevY = y;
    }
  }, [hasMovedEnough, hasMovedAtAll, calculateSpeed, createFlameImage, currentEffect]);

  const handleMouseMove = useCallback((e) => {
    mousePositionRef.current.prevX = mousePositionRef.current.x;
    mousePositionRef.current.prevY = mousePositionRef.current.y;
    mousePositionRef.current.x = e.clientX;
    mousePositionRef.current.y = e.clientY;
    
    stateRef.current.isCursorInContainer = isInContainer(e.clientX, e.clientY);
    
    if (stateRef.current.isCursorInContainer && hasMovedAtAll()) {
      stateRef.current.isMoving = true;
      clearTimeout(stateRef.current.moveTimeout);
      stateRef.current.moveTimeout = setTimeout(() => {
        stateRef.current.isMoving = false;
      }, 100);
    }
  }, [isInContainer, hasMovedAtAll]);

  const handleTouchStart = useCallback((e) => {
    const touch = e.touches[0];
    mousePositionRef.current.prevX = mousePositionRef.current.x;
    mousePositionRef.current.prevY = mousePositionRef.current.y;
    mousePositionRef.current.x = touch.clientX;
    mousePositionRef.current.y = touch.clientY;
    mousePositionRef.current.lastX = touch.clientX;
    mousePositionRef.current.lastY = touch.clientY;
    
    stateRef.current.isCursorInContainer = true;
    stateRef.current.isTouching = true;
    stateRef.current.lastMoveTime = Date.now();
  }, []);

  const handleTouchMove = useCallback((e) => {
    const touch = e.touches[0];
    const dx = Math.abs(touch.clientX - mousePositionRef.current.prevX);
    const dy = Math.abs(touch.clientY - mousePositionRef.current.prevY);
    
    mousePositionRef.current.prevX = mousePositionRef.current.x;
    mousePositionRef.current.prevY = mousePositionRef.current.y;
    mousePositionRef.current.x = touch.clientX;
    mousePositionRef.current.y = touch.clientY;
    
    stateRef.current.isCursorInContainer = true;
    
    if (dy > dx) return; // Prevent vertical scroll interference
    
    if (hasMovedAtAll()) {
      const speed = calculateSpeed();
      createFlameImage(speed);
      mousePositionRef.current.prevX = mousePositionRef.current.x;
      mousePositionRef.current.prevY = mousePositionRef.current.y;
    }
  }, [hasMovedAtAll, calculateSpeed, createFlameImage]);

  const handleTouchEnd = useCallback(() => {
    stateRef.current.isTouching = false;
  }, []);

  // Event listeners
  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  // Animation loop
  useEffect(() => {
    let animationId;
    
    const animate = () => {
      if (stateRef.current.isMoving || stateRef.current.isTouching || stateRef.current.isScrolling) {
        createTrailImage();
      }
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [createTrailImage]);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Noise overlay */}
      <div 
        className="fixed inset-0 opacity-5 pointer-events-none z-50 mix-blend-screen"
        style={{
          backgroundImage: 'url("https://assets.codepen.io/7558/noise-002.png")',
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px'
        }}
      />


      {/* Hero Section */}
      <section 
        ref={containerRef}
        className="relative w-full h-screen flex justify-center items-center overflow-hidden bg-gradient-to-br from-black-900 via-gray-800 to-black-900"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Text Columns - Hidden on mobile */}
        <div className="absolute inset-0 flex justify-center items-center z-20 px-8 hidden md:block">
          <div className="grid grid-cols-12 gap-4 w-full max-w-7xl">
            {textItems.map((column, colIndex) => (
              <div key={colIndex} className="col-span-4 flex flex-col gap-5">
                {column.map((item, itemIndex) => (
                  <span
                    key={item}
                    className={`
                      font-bold text-lg tracking-tight transition-all duration-800 ease-out
                      ${textVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-5 blur-sm'}
                    `}
                    style={{
                      color: `hsl(0, 0%, ${20 + itemIndex * 4}%)`,
                      transitionDelay: `${colIndex * 200 + itemIndex * 100}ms`
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Rotated Text - Hidden on mobile */}
        <div className="absolute right-12 top-0 h-full flex flex-col justify-evenly items-center z-20 hidden md:flex">
          {rotatedItems.map((item, index) => (
            <span
              key={item}
              className={`
                text-gray-500 font-bold text-xl tracking-tight transform rotate-90 whitespace-nowrap transition-all duration-800 ease-out
                ${rotatedTextVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'}
              `}
              style={{
                transitionDelay: `${index * 200}ms`
              }}
            >
              {item}
            </span>
          ))}
        </div>

        {/* FLAME SVG Letters */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <h1 className='text-9xl text-[#FBFBF9] font-bold font-[helvatica]'>Monster Energy Drink</h1>
        </div>

      </section>
    </div>
  );
};

export default FlameInteractiveTrail;