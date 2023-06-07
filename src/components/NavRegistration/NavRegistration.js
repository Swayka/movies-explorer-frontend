import { Link } from "react-router-dom";

function NavRegistration() {
	return (
		<nav>
			<ul className="navregistration">
				<li>
					<Link to='/signup' className="navregistration__signup-link">Регистрация</Link>
				</li>
				<li>
					<button className="navregistration__signin" type="button">
						<Link to='/signin' className="navregistration__signin-button">Войти</Link>
					</button>
				</li>
			</ul>
		</nav>
	)
}

export default NavRegistration;