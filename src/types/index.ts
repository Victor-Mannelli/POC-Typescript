export type SignUpBody = {
  email: string,
  username: string,
  password: string
}
export type CreateNewUser = Omit<SignUpBody, "password"> & {
  hashedPassword: string
}

// export type SignInBody = {
//   email: string,
//   password: string
// }
// export type Login = {
//   user_id: number,
//   token: string
// }

// export type ChangePasswordBody = {
//   user_id: number,
//   password: string
// }
// export type ChangePassword = Omit<ChangePasswordBody, "password"> & {
//   new_hashed_password: string
// }
