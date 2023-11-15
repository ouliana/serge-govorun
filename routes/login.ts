import express from 'express';
import { usersService } from '../controllers';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { config } from '../utils/config';

const loginRouter = express.Router();

loginRouter.post('/', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await usersService.getByUsername(username);

    const passwordCorrect =
      user === null ? false : await bcrypt.compare(password, user.passwordHash);

    if (!(user && passwordCorrect)) {
      res.status(401).json({ error: 'Invalid username or password' });
    }

    const token = jwt.sign(user, config.JWT_SECRET as string);
    res.status(200).send({
      token,
      username: user.username,
    });
  } catch (error) {
    return res.status(400).json({ error });
  }
});

export default loginRouter;
