import FormFooter from "components/Forms/FormFooter";
import TextInput from "components/Forms/TextInput";
import Link from "components/utils/Link";
import Notification from "components/utils/Notification";
import AppContext from "context/AppContext";
import { useFields } from "hooks/utils/useFields";
import { useNotification } from "hooks/utils/useNotification";
import { createUser } from "services/users";

import BackButton from "components/utils/BackButton";
import { useContext, useState } from "react";
import { ActivityIndicator, View } from "react-native";


const RegisterForm = ({ setRegistered }) => {
  const initialState = {
    username:{ value:"",order:0 },
    password:{ value:"",order:1 },
    confirmPassword:{ value:"",order:2 }
  };
  const [isLoading,setIsLoading] = useState(false);
  const [notification,setNotification] = useNotification(null);
  const { styles, redirect, userActions } = useContext(AppContext);
  const {  fields, textChange, validateComplete } = useFields(initialState);


  const handleError = (err) => {
    const errorMessage = err.message ?? err;
    setNotification(errorMessage);
    setTimeout(() => {
      setIsLoading(false);
    },1000);
  };

  const handleRegister = () => {
    setIsLoading(true);
    const { username,password,confirmPassword } = fields;
    if(!validateComplete(handleError)) return;

    if(username.value.length < 3 ) {
      handleError("Username must be at least 3 characters");
      return;
    }
    if(password.value.length < 3 ) {
      handleError("Password must be at least 3 characters");
      return;
    }
    if(password.value !== confirmPassword.value) {
      handleError("Passwords must match");
      return;
    }
    createUser({ username:username.value, password: password.value,dateOfBirth: new Date("10/10/1905") }).then(() => {
      userActions.logIn(username.value, password.value).then(() => {
        setIsLoading(false);
        redirect("/home");
      }).catch(handleError);
    }).catch(handleError);
  };


  return (
    <View style={styles.form.container}>
      <BackButton onPress={() => redirect("/settings")} />
      {isLoading? <ActivityIndicator/> :
        <>
          <Notification show={notification}/>
          <TextInput field="username" fields={fields} textChange={textChange}  />
          <TextInput field="password" fields={fields} textChange={textChange} secure  />
          <TextInput field="confirmPassword" fields={fields} textChange={textChange}  secure />
          <Link style={styles.form.button} title="Register" onPress={handleRegister}  />
          <FormFooter title="Log in" text="Already have an account?" onPress={() => setRegistered(true)}/>
        </>
      }
    </View>
  );
};

export default RegisterForm;