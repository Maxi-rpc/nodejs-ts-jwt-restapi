import { Request, Response } from "express";
import datos from "../services/index";

export const signUp = (req: Request, res: Response) => {
	res.send("signup");
};

export const signIn = (req: Request, res: Response) => {
	res.send("signin");
};

export const profile = (req: Request, res: Response) => {
	//res.send("profile");
	res.json(datos.user);
};
