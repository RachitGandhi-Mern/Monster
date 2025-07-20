import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
// import './LiquidButton.css';

const LiquidButton = () => {
  const canvasRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const points = 8;
    const viscosity = 20;
    const mouseDist = 70;
    const damping = 0.05;

    let pointsA = [],
      pointsB = [],
      context = null,
      canvas = null,
      mouseX = 0,
      mouseY = 0,
      relMouseX = 0,
      relMouseY = 0,
      mouseLastX = 0,
      mouseLastY = 0,
      mouseDirectionX = 0,
      mouseDirectionY = 0,
      mouseSpeedX = 0,
      mouseSpeedY = 0;

    const mouseDirection = (e) => {
      if (mouseX < e.pageX) mouseDirectionX = 1;
      else if (mouseX > e.pageX) mouseDirectionX = -1;
      else mouseDirectionX = 0;

      if (mouseY < e.pageY) mouseDirectionY = 1;
      else if (mouseY > e.pageY) mouseDirectionY = -1;
      else mouseDirectionY = 0;

      mouseX = e.pageX;
      mouseY = e.pageY;

      const canvasOffset = canvas.getBoundingClientRect();
      relMouseX = mouseX - canvasOffset.left;
      relMouseY = mouseY - canvasOffset.top;
    };

    const mouseSpeed = () => {
      mouseSpeedX = mouseX - mouseLastX;
      mouseSpeedY = mouseY - mouseLastY;
      mouseLastX = mouseX;
      mouseLastY = mouseY;
      setTimeout(mouseSpeed, 50);
    };

    class Point {
      constructor(x, y, level) {
        this.x = this.ix = 50 + x;
        this.y = this.iy = 50 + y;
        this.vx = this.vy = 0;
        this.level = level;
        this.cx1 = this.cy1 = this.cx2 = this.cy2 = 0;
      }

      move() {
        this.vx += (this.ix - this.x) / (viscosity * this.level);
        this.vy += (this.iy - this.y) / (viscosity * this.level);

        const dx = this.ix - relMouseX,
          dy = this.iy - relMouseY;
        const relDist = 1 - Math.sqrt(dx * dx + dy * dy) / mouseDist;

        if ((mouseDirectionX > 0 && relMouseX > this.x) || (mouseDirectionX < 0 && relMouseX < this.x)) {
          if (relDist > 0 && relDist < 1) {
            this.vx = (mouseSpeedX / 4) * relDist;
          }
        }

        this.vx *= 1 - damping;
        this.x += this.vx;

        if ((mouseDirectionY > 0 && relMouseY > this.y) || (mouseDirectionY < 0 && relMouseY < this.y)) {
          if (relDist > 0 && relDist < 1) {
            this.vy = (mouseSpeedY / 4) * relDist;
          }
        }

        this.vy *= 1 - damping;
        this.y += this.vy;
      }
    }

    const addPoints = (x, y) => {
      pointsA.push(new Point(x, y, 1));
      pointsB.push(new Point(x, y, 2));
    };

    const renderCanvas = () => {
      requestAnimationFrame(renderCanvas);
      context.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < pointsA.length; i++) {
        pointsA[i].move();
        pointsB[i].move();
      }

      const gradientX = Math.min(Math.max(relMouseX, 0), canvas.width);
      const gradientY = Math.min(Math.max(relMouseY, 0), canvas.height);
      const distance = Math.sqrt(Math.pow(gradientX - canvas.width / 2, 2) + Math.pow(gradientY - canvas.height / 2, 2)) / Math.sqrt(Math.pow(canvas.width / 2, 2) + Math.pow(canvas.height / 2, 2));

      const gradient = context.createRadialGradient(gradientX, gradientY, 300 + 300 * distance, gradientX, gradientY, 0);
      gradient.addColorStop(0, '#000');
      gradient.addColorStop(1, '#000');

      const groups = [pointsA, pointsB];

      groups.forEach((points, j) => {
        context.fillStyle = j === 0 ? '#000' : gradient;
        context.beginPath();
        context.moveTo(points[0].x, points[0].y);

        for (let i = 0; i < points.length; i++) {
          const p = points[i];
          const nextP = points[(i + 1) % points.length];
          const cx = (p.x + nextP.x) / 2;
          const cy = (p.y + nextP.y) / 2;
          context.bezierCurveTo(p.x, p.y, cx, cy, cx, cy);
        }
        context.fill();
      });
    };

    const initButton = () => {
      const button = buttonRef.current;
      canvas = canvasRef.current;
      const buttonWidth = button.offsetWidth;
      const buttonHeight = button.offsetHeight;

      canvas.width = buttonWidth + 100;
      canvas.height = buttonHeight + 100;
      context = canvas.getContext('2d');

      let x = buttonHeight / 2;
      for (let j = 1; j < points; j++) {
        addPoints(x + ((buttonWidth - buttonHeight) / points) * j, 0);
      }
      addPoints(buttonWidth - buttonHeight / 5, 0);
      addPoints(buttonWidth + buttonHeight / 10, buttonHeight / 2);
      addPoints(buttonWidth - buttonHeight / 5, buttonHeight);
      for (let j = points - 1; j > 0; j--) {
        addPoints(x + ((buttonWidth - buttonHeight) / points) * j, buttonHeight);
      }
      addPoints(buttonHeight / 5, buttonHeight);
      addPoints(-buttonHeight / 10, buttonHeight / 2);
      addPoints(buttonHeight / 5, 0);

      renderCanvas();
    };

    window.addEventListener('mousemove', mouseDirection);
    mouseSpeed();
    initButton();

    return () => window.removeEventListener('mousemove', mouseDirection);
  }, []);

  return (
    <NavLink to="/" ref={buttonRef} className="relative inline-block w-60 h-14 rounded-full text-white font-bold text-sm leading-[3.75rem] text-center uppercase tracking-wider no-underline">
      <canvas ref={canvasRef} className="absolute -top-[50px] -left-[50px] -right-[50px] -bottom-[50px] z-0"></canvas>
      <span className="relative z-10 font-[monster-energy]">Add to Cart</span>
    </NavLink>
  );
};

export default LiquidButton;

