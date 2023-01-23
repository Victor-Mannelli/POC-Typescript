import connection from "../database/database";
import * as types from "../types/index"

export async function checkEmail(email: string) {
  return await connection.query(`SELECT * FROM users WHERE email = $1`, [
    email,
  ]);
}
export async function createNewUser(props: types.CreateNewUser) {
  await connection.query(
    `INSERT INTO users (email, username, password, created_at) VALUES ($1, $2, $3, $4)`,
    [props.email, props.username, props.hashedPassword, Date.now()]
  );
}
export async function login(props: types.Login) {
  await connection.query(
    `INSERT INTO sessions (id, token) VALUES ($1, $2)`,
    [props.user_id, props.token]
  );
}
export async function findUserId(token: string) {
  return await connection.query(`SELECT * FROM sessions WHERE token = $1`, [token])
}
export async function deleteAccount(user_id: number) {
  await connection.query(
    "DELETE FROM users WHERE id = $1", [user_id]
  )
}
export async function changePassword(props: types.ChangePassword) {
  await connection.query(
    "UPDATE users SET password = $1 WHERE id = $2", [props.user_id, props.new_hashed_password]
  )
}
export async function getUserInfo(user_id: number) {
  return await connection.query(
    "SELECT * FROM users WHERE id = $1", [user_id]
  )
}