import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import * as repository from "../repositories/userRepository"

export async function validateSignUp(req: Request, res: Response, next: NextFunction ){
	try {
		const result = await repository.checkEmail(req.body.email);
		if (result.rows.length !== 0) {
			return res.status(409).send({ message: "Email already registered" });
		}

		next();
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}
export async function validateSignIn(req: Request, res: Response, next: NextFunction ){
	try {
		const user = await repository.checkEmail(req.body.email);
		if (user.rows.length === 0) {
			return res.status(401).send({ message: "This email is not registered" });
		}
		if (!bcrypt.compareSync(req.body.password, user.rows[0].password)) {
			return res.status(401).send({ message: "Password is incorrect" });
		}
		
		res.locals.user = user;
		next();
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}
