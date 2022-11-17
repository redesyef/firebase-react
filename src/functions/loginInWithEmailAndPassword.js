import { auth } from "../firebase/credenciales";
import { signInWithEmailAndPassword } from "firebase/auth";

export default async function loginInWithEmailAndPassword(email, password) {
    try {
        const user = await signInWithEmailAndPassword(auth,email, password)
        console.log(user);
    } catch (error) {
        console.error(error);
    }
}