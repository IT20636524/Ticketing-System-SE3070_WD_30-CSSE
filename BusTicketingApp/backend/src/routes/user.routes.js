import express from 'express';
import { create, getAll, getById, update } from '../controllers/user';

const userRouter = express.Router();

userRouter.post('/', create);
userRouter.get('/', getAll);
userRouter.get('/:id', getById);
userRouter.put('/:id', update);
// userRouter.delete('/:id', remove);

export default userRouter;