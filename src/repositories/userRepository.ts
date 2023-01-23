import connection from "../database/database";
import * as types from "../types/index"

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function checkEmail(email: string) {
  return await prisma.user.findFirst({
    where: {
      email: email
    }
  })
}
export async function createNewUser(params: types.CreateNewUser) {
  await prisma.user.create({
    data: {
      email: params.email,
      username: params.username,
      password: params.hashedPassword
    }
  })
}
// export async function login(props: types.Login) {
//   await connection.query(
//     `INSERT INTO sessions (id, token) VALUES ($1, $2)`,
//     [props.user_id, props.token]
//   );
// }
// export async function findUserId(token: string) {
//   return await connection.query(`SELECT * FROM sessions WHERE token = $1`, [token])
// }
// export async function deleteAccount(user_id: number) {
//   await connection.query(
//     "DELETE FROM users WHERE id = $1", [user_id]
//   )
// }
// export async function changePassword(props: types.ChangePassword) {
//   await connection.query(
//     "UPDATE users SET password = $1 WHERE id = $2", [props.user_id, props.new_hashed_password]
//   )
// }
// export async function getUserInfo(user_id: number) {
//   return await connection.query(
//     "SELECT users.email, users.username FROM users WHERE id = $1", [user_id]
//   )
// }