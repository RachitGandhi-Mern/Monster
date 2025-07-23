const User = require('../Models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


exports.signup = async (req , res) =>{
    try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ msg: "User already exists" });
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });
    res.status(201).json({ msg: "Signup successful", user });

        
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}

exports.login=  async(req , res)=>{
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
     if (!user) return res.status(400).json({ msg: "Invalid credentials" })
        const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.cookie("token", token, { httpOnly: true }).json({ msg: "Login successful" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.logout = (req, res) => {
  res.clearCookie("token").json({ msg: "Logged out" });
};


exports.getUser = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ msg: "No token" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");
    res.json(user);
  } catch (err) {
    res.status(401).json({ msg: "Token invalid" });
  }
};