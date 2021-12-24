import { Request, Response } from "express";

// jsonwebtoken
import jwt from "jsonwebtoken";

export const signUp = (req: Request, res: Response) => {
	// user fake
	const userFake = {
		_id: 1,
		username: req.body.username,
		email: req.body.email,
		password: req.body.password,
	};

	// token
	const token: string = jwt.sign(
		{
			_id: userFake._id,
		},
		process.env.TOKEN_SECRET || "tokentest"
	);

	res.json(token);
	// res.send("respuesta signup");
};

export const signIn = (req: Request, res: Response) => {
	res.send("respuesta signin");
};

export const profile = (req: Request, res: Response) => {
	res.send("respuesta profile");
};
