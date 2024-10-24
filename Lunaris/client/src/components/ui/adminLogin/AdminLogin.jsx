import React, { useContext, useEffect, useState } from "react";
import MyModal from "../modal/MyModal";
import MyButton from "../button/MyButton";
import MyInput from "../input/MyInput";
import { AuthContext } from "../../../context";
import { useNavigate } from "react-router-dom";

const AdminLogin = ({ authModal, setAuthModal }) => {
  const navigate = useNavigate();
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const [loginInput, setLoginInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const adminUsers = [
    { login: "admin1", password: "password" },
    { login: "admin2", password: "securePass456" },
  ];

  useEffect(() => {
    if (localStorage.getItem("auth")) setIsAuth(true);
  }, [setIsAuth]);

  const login = (event) => {
    event.preventDefault();
    const admin = adminUsers.find(
      (user) => user.login === loginInput && user.password === passwordInput
    );
    if (admin) {
      setIsAuth(true);
      localStorage.setItem("auth", "true");
      setAuthModal(false);
      setErrorMessage("");
      navigate(`/events`); // Redirect after successful login
    } else {
      setErrorMessage("Неправильный пароль или логин!");
    }
  };

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
    setAuthModal(false);
  };

  return (
    <div>
      {isAuth ? (
        <MyModal visible={authModal} setVisible={setAuthModal}>
          <h3>Уже уходите?</h3>
          <MyButton onClick={logout}>Выйти</MyButton>
        </MyModal>
      ) : (
        <MyModal visible={authModal} setVisible={setAuthModal}>
          <form onSubmit={login}>
            <MyInput
              type='text'
              placeholder='Логин'
              value={loginInput}
              onChange={(e) => setLoginInput(e.target.value)}
            />
            <MyInput
              type='password'
              placeholder='Пароль'
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
            />
            <MyButton type='submit'>Войти</MyButton>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          </form>
        </MyModal>
      )}
    </div>
  );
};

export default AdminLogin;
