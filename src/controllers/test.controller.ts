import { Request, Response } from "express";

// datos test
import datos from "../services/index";

// get one user
export const getUser = (req: Request, res: Response) => {
	const userSingle = datos.user;
	res.json(userSingle);
};
// get all user
export const getUsers = (req: Request, res: Response) => {
	const userAll = datos.users;
	res.json(userAll);
};
