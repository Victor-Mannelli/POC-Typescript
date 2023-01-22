import connection from "../database/database";

export async function checkEmail(email: string) {
  return await connection.query(`SELECT * FROM users WHERE email = $1`, [
    email,
  ]);
}
export async function createNewUser({ email, username, hashedPassword }) {
  await connection.query(
    `INSERT INTO users (email, username, password, created_at) VALUES ($1, $2, $3, $4)`,
    [email, username, hashedPassword, Date.now()]
  );
}
export async function login({ user_id, token }) {
  await connection.query(
    `INSERT INTO sessions (id, token) VALUES ($1, $2)`,
    [user_id, token]
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
export async function changePassword({ user_id, new_hashed_password }) {
  await connection.query(
    "UPDATE users SET password = $1 WHERE id = $2", [user_id, new_hashed_password]
  )
}
