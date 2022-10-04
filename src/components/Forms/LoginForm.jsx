import TextInput from "components/forms/TextInput";
import BackButton from "components/utils/BackButton";
import Link from "components/utils/Link";
import Notification from "components/utils/Notification";
import AppContext from "context/AppContext";
import { useFields } from "hooks/utils/useFields";
import { useNotification } from "hooks/utils/useNotification";

import { useContext, useState } from "react";
import { ActivityIndicator, View } from "react-native";
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
    setTimeout(() => {
      setIsLoading(false);
    },1000);
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
          <TextInput field="username" fields={fields} textChange={textChange}/>
          <TextInput field="password" fields={fields} textChange={textChange} secure/>
          <Link style={styles.form.button} title="Log in" onPress={handleLogin}  />
          <FormFooter title="Register" text="Don't have an account yet?" onPress={() => setRegistered(false)}/>
        </>
      }
    </View>
  );
};

export default LoginForm;