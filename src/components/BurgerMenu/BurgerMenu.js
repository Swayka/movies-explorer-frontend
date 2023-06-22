import { NavLink } from "react-router-dom";

function BurgerMenu({ onClose }) {

	const handleLinkClick = () => {
		onClose();
	};

	return (
		<section className="burgermenu">
			<nav className="burgermenu__container">
				<button className="burgermenu_closebutton" onClick={() => onClose()}></button>
				<ul className="burgermenu__links">
					<li className="burgermenu__element">
						<NavLink to='/' className="burgermenu__link" onClick={handleLinkClick}>Главная</NavLink>
					</li>
					<li className="burgermenu__element">
						<NavLink to='/movies' className="burgermenu__link" onClick={handleLinkClick}>Фильмы</NavLink>
					</li>
					<li className="burgermenu__element">
						<NavLink to='/saved-movies' className="burgermenu__link" onClick={handleLinkClick}>Сохраненные фильмы</NavLink>
					</li>
					<li className="burgermenu__element">
						<div className="burgermenu__account">
							<NavLink to='/profile' className="burgermenu__account-link" onClick={handleLinkClick}>Аккаунт</NavLink>
							<NavLink to="/profile" onClick={handleLinkClick}>
								<div className="burgermenu__account-logo"></div>
							</NavLink>
						</div>
					</li>
				</ul>
			</nav>
		</section>

	)
}

export default BurgerMenu;