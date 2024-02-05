import { useLocation } from "react-router-dom";
import scss from "../header/Header.module.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
	const location = useLocation();
	console.log(location.pathname);
	return (
		<>
			<header className={scss.Header}>
				<nav>
					<ul>
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
						<li>
							<NavLink to="/login">Login</NavLink>
						</li>
						<li>
							<NavLink to="/registration">registraiton</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
};

export default Header;
