import React from "react";
import plus from '../images/plus.svg'
import pen from '../images/pen.svg'
import spinner from '../images/UDui.gif'
import {api} from '../utils/api'
import Card from './Card'


function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
  
  const [userName, setUserName] = React.useState();
  const [userDescription , setUserDescription ] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(()=>{
    api.getInfoUserServer()
      .then((dataUser) => {
        setUserName(dataUser.name);
        setUserDescription(dataUser.about);
        setUserAvatar(dataUser.avatar);
      })
  }, [])

  React.useEffect(()=>{
    api.getItemsServer()
      .then((cardsServer) => {
        setCards(cardsServer)
      })
  }, [])

  return (
    <main className="content page__content">
    
      <section className="profile content__profile">
        <div className="profile__info">
          <div className="profile__btn-avatar" onClick={onEditAvatar}>
            <img src={userAvatar} alt="Аватарка" className="profile__avatar" />
          </div>
          <div className="profile__title-box">
            <h1 className="profile__title">{userName}</h1>
            <button className="profile__edit" type="button" onClick={onEditProfile}>
              <img src={pen} alt="Редактировать" />
            </button>
          </div>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button className="profile__add" type="button" onClick={onAddPlace}>
          <img src={plus} alt="Добавить" className="profile__add-image" />
        </button>
      </section>

      <section className="places" aria-label="Публикации">
          {
            cards.map((card, i) => (      
            <article className="card" key = {card._id}>
              <Card card = {card} onCardClick = {onCardClick}/>
            </article>
            ))
          }
      </section>
    </main>
    
  );
}

export default Main;
