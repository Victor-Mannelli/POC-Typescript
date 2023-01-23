import { Request, Response } from "express";
import { v4 as uuid } from "uuid";
import * as userService from "../services/userService";
import * as types from "../types/index"

export async function singUp(req: Request, res: Response) {
  try {
    const body: types.SignUpBody = req.body;
    await userService.createNewUser(body);
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
export async function getUserInfo(_req: Request, res: Response) {
  try {
    const user_id: number = res.locals.user.rows[0].user_id;
    const userInfo = await userService.getUserInfo(user_id)
    res.send(200).send(userInfo) //// test user info to aplly type and send only rows

  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}