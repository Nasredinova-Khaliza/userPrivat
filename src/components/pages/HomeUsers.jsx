import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import scss from "./HomeUsers.module.scss";

const url = "https://api.elchocrud.pro/api/v1/b7a53dbdbeacda940e409c2ca91348bb/userPrivat";

const HomeUsers = () => {
  const [users, setUsers] = useState([]);
  const [userProfile, setUserProfile] = useState({});
  const navigate = useNavigate();

  const getUserProfile = async () => {
    try {
      const response = await axios.get(url);
      const userProfile = response.data;
      const getUserIdLocalStorage = localStorage.getItem("isAuth");
      const findUser = userProfile.find((item) => item._id === getUserIdLocalStorage);
      setUserProfile(findUser);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  const handleLogin = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("password");
    localStorage.removeItem("isAuth");
    navigate("/login");
  };

  const getRequest = async () => {
    try {
      const response = await axios.get(url);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const postRequest = async () => {
    try {
      const response = await axios.post(url, {});
      setUsers(response.data);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  useEffect(() => {
    getRequest();
    getUserProfile();
  }, []);

  useEffect(() => {
    postRequest();
  }, []);

  return (
    <div className={scss.HomeUsers}>
      <h1>HOME USERS</h1>
      <div>
        {users.map((item, index) => (
          <div className={scss.card} key={index}>
            <h1>{item.name}</h1>
            <p>{item.password}</p>
          </div>
        ))}
      </div>
      <div>
        <button className={scss.exitButton} onClick={handleLogin}>
          ВЫЙТИ
        </button>
      </div>
    </div>
  );
};

export default HomeUsers;
