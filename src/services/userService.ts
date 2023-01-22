import bcrypt from "bcrypt";
import * as userRepository from "../repositories/userRepository"

export async function createNewUser({ email, username, password }) {
	try {
		const hashedPassword = bcrypt.hashSync(password, 10);
		await userRepository.createNewUser({ email, username, hashedPassword });
	} catch (error) {
		console.log(error);
		return
	}
}
export async function login({ user_id, token }) {
	try {
		await userRepository.login({ user_id, token });
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
