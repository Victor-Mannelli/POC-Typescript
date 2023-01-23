import bcrypt from "bcrypt";
import * as userRepository from "../repositories/userRepository"
import * as types from "../types/index"

export async function createNewUser(props: types.SignUpBody) {
	try {
		const hashedPassword: string = bcrypt.hashSync(props.password, 10);
		await userRepository.createNewUser({props.email, props.username , hashedPassword}); // ????????
	} catch (error) {
		console.log(error);
		return
	}
}
export async function login(props: types.Login) {
	try {
		await userRepository.login({ props.user_id, props.token }); // ???
	} catch (error) {
		console.log(error);
		return
	}
}
export async function deleteAccount(user_id: number) {
	try {
		await userRepository.deleteAccount(user_id);
	} catch (error) {
		console.log(error);
		return
	}
}
export async function changePassword(user_id, new_password) {
	try {
		const new_hashed_password = bcrypt.hashSync(new_password, 10);
		await userRepository.changePassword({user_id, new_hashed_password});
	} catch (error) {
		console.log(error);
		return
	}
}
export async function getUserInfo(user_id: number) {
	try {
		return await userRepository.deleteAccount(user_id)
	} catch (error) {
		console.log(error);
		return
	}
}
