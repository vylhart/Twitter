import AsyncStorage from "@react-native-async-storage/async-storage";
import User from "../model/User";

export const storeToken = async (token: string): Promise<void> => {
  try {
    await AsyncStorage.setItem("token", token);
    console.log("Token stored:", token);
  } catch (error) {
    console.error("Error storing token:", error);
  }
};

export const getToken = async (): Promise<string | null> => {
  try {
    const token = await AsyncStorage.getItem("token");
    console.log("Token retrieved:", token);
    return token;
  } catch (error) {
    console.error("Error retrieving token:", error);
    return null;
  }
};

export const storeUser = async (handle: string): Promise<void> => {
  try {
    const user: User = {
      _id: Math.random().toString(16).slice(2),
      handle: handle,
      imageUrl: null,
      data: null,
    }
    await AsyncStorage.setItem("user", JSON.stringify(user));
    console.log("User stored:", user);
  } catch (error) {
    console.error("Error storing user:", error);
  }
};

export const getUser = async (): Promise<User | null> => {
  try {
    const user = await AsyncStorage.getItem("user");
    console.log("User retrieved:", user);
    return JSON.parse(<string>user);
  } catch (error) {
    console.error("Error retrieving user:", error);
    return null;
  }
}
