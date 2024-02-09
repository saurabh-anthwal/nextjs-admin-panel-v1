import { app } from "@/config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail
} from "firebase/auth";
const auth = getAuth(app);

export const registerUser = async (email, password) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    // console.log(result);
    return result;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const signinUser = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result;
  } catch (err) {
    return err;
  }
};

export const forgotPasswordSendEmail = async (email) => {
  try {
    const result = await sendPasswordResetEmail(auth, email);
    return result;
  } catch (err) {
    return err;
  }
};


