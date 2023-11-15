import express from 'express';
import { usersService } from '../controllers';
import bcrypt from 'bcrypt';

const usersRouter = express.Router();

usersRouter.get('/:username', async (req, res) => {
  try {
    const brand = await usersService.getByUsername(req.params.username);
    res.json(brand);
  } catch (err) {
    return res.status(400).json({ err });
  }
});

usersRouter.post('/', async (req, res) => {
  const { fullName, username, password } = req.body;

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = {
    fullName,
    username,
    passwordHash,
  };

  console.log('user', user);

  try {
    const newUser = await usersService.create(user);
    res.status(201).json(newUser);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

usersRouter.put('/:id', async (req, res) => {
  try {
    await usersService.update(req.params.id, req.body);
    return res.status(204).end();
  } catch (error) {
    return res.status(400).json({ error });
  }
});

export default usersRouter;
