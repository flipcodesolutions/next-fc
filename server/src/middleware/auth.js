import jwt from 'jsonwebtoken';
import { config } from '../config/index.js';

export function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    res.status(401).json({ success: false, message: 'Access token is required' });
    return;
  }

  jwt.verify(token, config.jwtSecret, (err, decoded) => {
    if (err) {
      res.status(403).json({ success: false, message: 'Invalid or expired access token' });
      return;
    }
    req.user = decoded;
    next();
  });
}
