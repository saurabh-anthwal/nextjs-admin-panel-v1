import { db } from "@/config";
import { collection, addDoc } from "firebase/firestore";

export const createProduct = async (product) => {
  try {
    const result = await addDoc(collection(db, "products"), product);
    
    return result;
  } catch (err) {
    return err;
  }
};
