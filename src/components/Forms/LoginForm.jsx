import Link from "components/utils/Link";
import AppContext from "context/AppContext";
import { useFields } from "hooks/utils/useFields";

import BackButton from "components/utils/BackButton";
import Notification from "components/utils/Notification";
import { useNotification } from "hooks/utils/useNotification";
import { useContext, useState } from "react";
import { ActivityIndicator, TextInput, View } from "react-native";
import FormFooter from "./FormFooter";


const LoginForm = ({ setRegistered }) => {
  const initialState = {
    username:{ value:"",order:0 },
    password:{ value:"",order:1 }
  };
  const [isLoading,setIsLoading] = useState(false);
  const { styles, redirect, userActions } = useContext(AppContext);
  const {  fields, textChange, validateComplete } = useFields(initialState);
  const [notification,setNotification] = useNotification(null);

  const handleError = (err) => {
    const errorMessage = err.message ?? err;
    setNotification(errorMessage);
    setIsLoading(false);
  };


  const handleLogin = () => {
    setIsLoading(true);
    const { username,password } = fields;
    if(!validateComplete(handleError)) return;

    userActions.logIn(username.value, password.value).then(() => {
      setIsLoading(false);
      redirect("/home");
    }).catch(handleError);

  };


  return (
    <View style={styles.form.container}>
      <BackButton onPress={() => redirect("/more")} />
      {isLoading? <ActivityIndicator/> :
        <>
          <Notification show={notification}/>
          <TextInput placeholderTextColor={styles.form.text.placeHolderColor} placeholder="Username" style={styles.form.text} value={fields.username.value} onChange={(evt) => textChange(evt,"username")} />
          <TextInput placeholderTextColor={styles.form.text.placeHolderColor} placeholder="Password" style={styles.form.text}  onChange={(evt) => textChange(evt,"password")} />
          <Link style={styles.form.button} title="Log in" onPress={handleLogin}  />
          <FormFooter title="Register" text="Don't have an account yet?" onPress={() => setRegistered(false)}/>
        </>
      }
    </View>
  );
};

export default LoginForm;