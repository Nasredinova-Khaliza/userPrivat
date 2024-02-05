import axios from "axios";
import scss from "../pages/Login.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const url = "https://api.elchocrud.pro/api/v1/b7a53dbdbeacda940e409c2ca91348bb/userPrivat";

const Login = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const navigate = useNavigate();

  const handleHome = async () => {
    if (inputEmail === "" || inputPassword === "") {
      alert("Заполните поле!");
    } else {
      try {
        const response = await axios.get(url);
        const responseData = response.data;

        const usersFind = responseData.find(
          (item) => item.name === inputEmail && item.password === inputPassword
        );

        if (usersFind) {
          localStorage.setItem("isAuth", "" + usersFind._id);
          navigate("/homeUsers");
        } else {
          alert("Неверный логин или пароль");
        }
      } catch (error) {
        console.error("Error logging in:", error);
        alert("Ошибка входа. Пожалуйста, попробуйте еще раз.");
      }
    }
  };

  const handleResis = () => {
    navigate("/registration");
  };

  return (
    <div className={scss.Login}>
      <div className={scss.card}>
        <div className={scss.login}>
          <div>
            <h1>Вход</h1>
          </div>
          <div>
            <label htmlFor="username">Телефон или адрес эл. почты</label> <br />
            <input
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
              type="text"
              id="username"
              name="username"
            />
          </div>
          <div>
            <label htmlFor="password">Пароль</label> <br />
            <input
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
              type="password"
              id="password"
              name="password"
            />
          </div>
          <div>
            <button onClick={handleHome}>Войти</button>
          </div>
          <div>
            <p>Нет профиля</p>
          </div>
          <div>
            <button onClick={handleResis}>Зарегистрироваться</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
