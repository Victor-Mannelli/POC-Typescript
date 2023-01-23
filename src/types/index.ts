export type SignUpBody = {
  email: string,
  username: string,
  password: string
}
export type CreateNewUser = Omit<SignUpBody, "password"> & {
  hashedPassword: string
}

export type SignInBody = {
  email: string,
  password: string
}
export type Login = {
  userId: number,
  token: string
}

export type ChangePasswordBody = {
  userId: number,
  newPassword: string
}
export type ChangePassword = Omit<ChangePasswordBody, "newPassword"> & {
  newHashedPassword: string
}
