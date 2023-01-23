import bcrypt from "bcrypt";
import * as userRepository from "../repositories/userRepository"
import * as types from "../types/index"

export async function createNewUser(params: types.SignUpBody) {
	try {
		const hashedPassword: string = bcrypt.hashSync(params.password, 10);
		await userRepository.createNewUser({ email: params.email, username: params.username, hashedPassword });
	} catch (error) {
		console.log(error);
		return
	}
}
export async function login(params: types.Login) {
	try {
		await userRepository.login({ user_id: params.user_id, token: params.token });
	} catch (error) {
		console.log(error);
		return
	}
}

// export async function deleteAccount(user_id: number) {
// 	try {
// 		await userRepository.deleteAccount(user_id);
// 	} catch (error) {
// 		console.log(error);
// 		return
// 	}
// }
// export async function changePassword(params: types.ChangePasswordBody) {
// 	try {
// 		const new_hashed_password = bcrypt.hashSync(params.password, 10);
// 		await userRepository.changePassword({user_id: params.user_id, new_hashed_password});
// 	} catch (error) {
// 		console.log(error);
// 		return
// 	}
// }
// export async function getUserInfo(user_id: number) {
// 	try {
// 		return await userRepository.deleteAccount(user_id)
// 	} catch (error) {
// 		console.log(error);
// 		return
// 	}
// }
