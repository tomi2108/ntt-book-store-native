import LoginForm from "components/Forms/LoginForm";
import RegisterForm from "components/Forms/RegisterForm";
import AppContext from "context/AppContext";
import { useModal } from "hooks/utils/useModal";
import { useContext, useEffect, useState } from "react";
import { Modal, View } from "react-native";

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
    redirect("/more");
  };

  return (
    <View>
      <Modal animationType="slide" presentationStyle="fullScreen" visible={modal} onRequestClose={returnToSettings} >
        <View style={{ justifyContent:"center",alignItems:"center" }}>
          {
            registered? <LoginForm setRegistered={setRegistered}/> : <RegisterForm setRegistered={setRegistered}/>
          }
        </View>
      </Modal>
    </View>
  );
};

export default Login;