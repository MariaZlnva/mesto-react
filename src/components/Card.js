import React from "react";

function Card({card, onCardClick}) {

  const handleClick = () => {
    onCardClick(card);
  }  

  return (
    <>
      <button aria-label="Удалить" className="card__delete" type="button"></button>
      <img src={`${card.link}`} alt={card.name} className="card__image" onClick={handleClick}/>
      <div className="card__info">
        <h2 className="card__title">{card.name}</h2>
        <div>
          <button aria-label="Нравится" className="card__like" type="button"></button>
          <div className="card__calcul-like">{card.likes.length}</div>
        </div> 
      </div>
    </>
  );
}

export default Card;
