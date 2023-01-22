import { Request, Response } from "express";
import { v4 as uuid } from "uuid";
import * as userService from "../services/userService";

export async function singUp(req: Request, res: Response) {
  try {
    await userService.createNewUser(req.body);
    res.status(201).send({ message: "User Created" });

  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}
export async function singIn(_req: Request, res: Response) {
  try {
    const user_id = res.locals.user.rows[0].user_id;
    const token = uuid();
    await userService.login({ user_id, token });
    res.status(200).send(token);
    
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}
export async function deleteAccount(_req: Request, res: Response) {
  try {
    const user_id = res.locals.user.rows[0].user_id;
    await userService.deleteAccount(user_id)
    res.send(200).send({message: "User Deleted Successfully"})

  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}
export async function changePassword(_req: Request, res: Response) {
  try {
    const user_id = res.locals.user.rows[0].user_id;
    await userService.deleteAccount(user_id)
    res.send(200).send({message: "Password Changed Successfully"})

  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}
