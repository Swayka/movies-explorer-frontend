import { Link } from 'react-router-dom';

function Profile(props){
    
  return (
    <section className="profile">
			<h2 className="profile__heading">{props.title}</h2>
			<div className='profile__username'>
				<p className='profile__desc'>Имя</p>
				<p className='profile__desc'>Виталий</p>
			</div>
			<div className='profile__useremail'>
				<p className='profile__desc'>E-mail</p>
				<p className='profile__desc'>pochta@yandex.ru</p>
			</div>
			<div className="profile__handlers">
				<Link to='/profile-edit' className="profile__edit-profile">{props.submitValue}</Link>
				<Link to='/signin' className="profile__exit-btn">{props.exitBtn}</Link>
			</div>    
    </section>
  )
}

export default Profile;
