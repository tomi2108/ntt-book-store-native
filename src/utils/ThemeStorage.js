import AsyncStorage from "@react-native-async-storage/async-storage";

class ThemeStorage {
  constructor(namespace = "themeStorage") {
    this.namespace = namespace;
  }

  async getTheme(){
    try{
      const theme = await AsyncStorage.getItem(`${this.namespace}:theme`);
      return theme ? theme : null;
    }catch(e){
      throw new Error(e);
    }
  }


  async toggleTheme(){
    try{
      const theme = await AsyncStorage.getItem(`${this.namespace}:theme`);

      theme === "DARK"?
        await AsyncStorage.setItem(`${this.namespace}:theme`,"LIGHT") :
        await AsyncStorage.setItem(`${this.namespace}:theme`,"DARK");
    }catch(e){
      throw new Error(e);
    }
  }
}
export default ThemeStorage;
