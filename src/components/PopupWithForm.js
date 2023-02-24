import React from 'react';

function PopupWithForm ({title, name, children, titleBtn, isOpen, onClose}) {
  
  return (
    <div 
    // className={`popup popup_${name}`}
      className = {
        isOpen 
        ? (`popup popup_${name} popup_opened`)
        : (`popup popup_${name}`)
      }
    >
        <div className="popup__content">
          <button aria-label="Закрыть" className="popup__close" type="button" onClick={onClose}></button>
          <h2 className="popup__title">{title}</h2>
          <form className="popup__form" noValidate name={name}>
            {children}
            <button className="popup__button" type="submit">{titleBtn}</button>
          </form>
        </div>
      </div>
  );
}

export default PopupWithForm ;


      // <div className="popup popup_delete-card">
      //   <div className="popup__content">
      //     <button aria-label="Закрыть" className="popup__close" type="button"></button>
      //     <h2 className="popup__title">Вы уверены?</h2>
      //     <form className="popup__form" novalidate name="deleteCard">
      //       <button className="popup__button" type="submit">Да</button>
      //     </form>
      //   </div>
      // </div>
      // <div className="popup popup_update-avatar">
      //   <div className="popup__content">
      //     <button aria-label="Закрыть" className="popup__close" type="button"></button>
      //     <h2 className="popup__title">Обновить аватар</h2>
      //     <form className="popup__form" novalidate name="imageAvatar">
      //       <input id="urlAvatar" className="popup__input popup__input_link" placeholder="Ссылка" type="url" name="avatarUrl" value="" required />
      //       <span id="urlAvatar-error" className="error"></span>
      //       <button className="popup__button" type="submit">Сохранить</button>
      //     </form>
      //   </div> 
      //   <div className="popup popup_edit-profile">
      //   <div className="popup__content">
      //     <button aria-label="Закрыть" className="popup__close" type="button"></button>
      //     <h2 className="popup__title">Редактировать профиль</h2>
      //     <form className="popup__form" novalidate name="aboutUser">
      //       <input id="nameUser" className="popup__input popup__input_name" type="text" name="nameUser" value="" placeholder="Имя" minlength="2" maxlength="40" required />
      //       <span id="nameUser-error" className="error"></span>
      //       <input id="aboutUser" className="popup__input popup__input_info" type="text" name="aboutUser" value="" placeholder="О себе" minlength="2" maxlength="200" required />
      //       <span id="aboutUser-error" className="error"></span>
      //       <button className="popup__button" type="submit">Сохранить</button>
      //     </form>
      //   </div>
      // </div> 
      // <div className="popup popup_add-cards">
      //   <div className="popup__content">
      //     <button aria-label="Закрыть" className="popup__close" type="button"></button>
      //     <h2 className="popup__title">Новое место</h2>
      //     <form className="popup__form" novalidate name="aboutCard">
      //       <input id="nameCard" className="popup__input popup__input_title" placeholder="Название" type="text" name="cardName" value="" minlength="2" maxlength="30" required />
      //       <span id="nameCard-error" className="error"></span>
      //       <input id="urlCard" className="popup__input popup__input_link" placeholder="Ссылка на картинку" type="url" name="cardUrl" value="" required />
      //       <span id="urlCard-error" className="error"></span>
      //       <button className="popup__button" type="submit">Создать</button>
      //     </form>
      //   </div>
      // </div>
