import User from '../models/mongo/User.js';
import { generateToken } from '../config/jwt.js';

export const loginWithUsername = async (req, res) => {
  const { username, otp } = req.body;
  
  const user = await User.findOne({ username });
  console.log('[user] ',user);
  if (!user || user.otp !== otp){ 
    return res.status(401).json({ error: "Invalid user or otp" });
  }

  const token = generateToken(user);

  res.json({ token, username: user.username, role: user.role });
};

// export default loginWithUsername;