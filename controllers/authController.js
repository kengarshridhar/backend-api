import User from '../models/mongo/User.js';
import generateToken from '../config/jwt.js';

export const loginWithUsername = async (req, res) => {
  const { username, otp } = req.body;
  
  const user = await User.findOne({ username });
  
  if (!user || user.otp !== otp){ 
    return res.status(401).json({ error: "Invalid" });
  }

  const token = generateToken(user);

  res.json({ token });
};

// export default loginWithUsername;