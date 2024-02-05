import scss from "./Home.module.scss";

import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();
	const handleLogin = () => {
		navigate("/login");
	};
	return (
		<div>
			<div className={scss.text}>
				<h1>Авторизация</h1>
			</div>
			<div className={scss.LoginButton}>
				<button onClick={handleLogin}>Login</button>
			</div>
		</div>
	);
};

export default Home;
