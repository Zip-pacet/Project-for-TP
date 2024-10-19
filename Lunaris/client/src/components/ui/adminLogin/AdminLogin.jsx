import React, { useContext, useEffect, useState } from "react";
import MyModal from "../modal/MyModal";
import MyButton from "../button/MyButton";
import MyInput from "../input/MyInput";
import { AuthContext } from "../../../context";

const AdminLogin = ({ authModal, setAuthModal }) => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const [loginInput, setLoginInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Array of admin users with login and password
  const adminUsers = [
    { login: "admin1", password: "password" },
    { login: "admin2", password: "securePass456" },
  ];

  useEffect(() => {
    if (localStorage.getItem("auth")) setIsAuth(true);
  }, [setIsAuth]);

  // Login function with credential validation
  const login = (event) => {
    event.preventDefault();
    const admin = adminUsers.find(
      (user) => user.login === loginInput && user.password === passwordInput
    );
    if (admin) {
      setIsAuth(true);
      localStorage.setItem("auth", "true");
      setAuthModal(false); // Close modal after successful login
      setErrorMessage(""); // Clear any previous error message
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
        // Show logout modal when the admin is logged in
        <MyModal visible={authModal} setVisible={setAuthModal}>
          <h3>Уже уходите?</h3>
          <MyButton onClick={logout}>Выйти</MyButton>
        </MyModal>
      ) : (
        // Show login modal when the admin is not logged in
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
