import AsyncStorage from "@react-native-async-storage/async-storage";
import { setToken as setServiceToken } from "services/controller";

class UserStorage {
  constructor(namespace = "userStorage") {
    this.namespace = namespace;
  }

  async getUser(){
    try{
      const user = await AsyncStorage.getItem(`${this.namespace}:user`);
      return user ? JSON.parse(user) : null;
    }catch(e){
      throw new Error(e);
    }
  }


  async setUser(user){
    try{
      await AsyncStorage.setItem( `${this.namespace}:user`, JSON.stringify(user));
    }catch(e){
      throw new Error(e);
    }
  }

  async clearUser(){
    try{
      await AsyncStorage.removeItem(`${this.namespace}:user`);
    }catch(e){
      throw new Error(e);
    }
  }

  async getToken() {
    try{
      const token = await AsyncStorage.getItem(`${this.namespace}:token`);
      return token ? JSON.parse(token) : "";
    }catch(e){
      throw new Error(e);
    }
  }

  async setToken(token) {
    try{
      await AsyncStorage.setItem( `${this.namespace}:token`, JSON.stringify(token));
      setServiceToken(token);
    }catch(e){
      throw new Error(e);
    }
  }

  async clearToken() {
    try{
      await AsyncStorage.removeItem(`${this.namespace}:token`);
      setServiceToken(null);
    }catch(e){
      throw new Error(e);
    }
  }
}
export default UserStorage;
