import LoginForm from "components/Forms/LoginForm";
import RegisterForm from "components/Forms/RegisterForm";
import AppContext from "context/AppContext";
import { useModal } from "hooks/utils/useModal";
import { useContext, useEffect, useState } from "react";
import { Keyboard, Modal, TouchableWithoutFeedback, View } from "react-native";

const Login = () => {
  const { user,redirect } = useContext(AppContext);
  const { modal, hideModal, showModal } = useModal();
  const [registered, setRegistered] = useState(true);

  useEffect(() => {
    if(user) redirect("/home");
  },[user]);


  useEffect(() => {
    showModal();
  },[]);

  const returnToSettings = () => {
    hideModal();
    redirect("/settings");
  };

  return (
    <Modal animationType="slide" presentationStyle="fullScreen" visible={modal} onRequestClose={returnToSettings} >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={{ justifyContent:"center",alignItems:"center" }}>
          {
            registered? <LoginForm setRegistered={setRegistered}/> : <RegisterForm setRegistered={setRegistered}/>
          }
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default Login;