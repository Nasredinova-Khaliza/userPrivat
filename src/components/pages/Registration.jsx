import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import scss from "./Registration.module.scss";

const url = "https://api.elchocrud.pro/api/v1/b7a53dbdbeacda940e409c2ca91348bb/userPrivat";

const Registration = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      if (name === "" || password === "") {
        alert("Заполните поле!");
        return;
      }

      const response = await axios.get(url);
      const responseData = response.data;

      const userExists = responseData.find((item) => item.name === name);

      if (userExists) {
        alert("Пользователь с таким именем уже существует!");
        return;
      }

      const registrationResponse = await axios.post(url, { name, password });

      if (registrationResponse.status === 200 || registrationResponse.status === 201) {
        localStorage.setItem("login", name);
        localStorage.setItem("password", password);
        navigate("/login");
      } else {
        alert("Ошибка при регистрации!");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Ошибка при регистрации!");
    }
  };

  return (
    <div className={scss.Registration}>
      <div className={scss.card}>
        <div className={scss.inputs}>
          <div>
            <h2>Введите номер или адрес эл. почты</h2>
          </div>
          <div>
            <label htmlFor="username">Телефон или адрес эл. почты</label> <br />
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="username"
              name="username"
            />
          </div>
          <div>
            <label htmlFor="password">Пароль</label> <br />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              name="password"
            />
          </div>
          <div>
            <button onClick={handleLogin}>Зарегистрироваться</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
