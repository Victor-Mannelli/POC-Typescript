import { Request, Response } from "express";

export async function test(req: Request, res: Response) {
  res.sendStatus(200);
}