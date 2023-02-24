import React from 'react'

// import './index';

import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'

function App() {

  //переменные состояния, отвечающие за видимость трёх попапов:
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState();

  function handleEditProfileClick () {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen)
  }
  function handleAddPlaceClick () {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen)
  }
  function handleEditAvatarClick () {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen)
  }

  function handleCardClick () {
    setSelectedCard()
  }
  
  function closeAllPopups () {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false)
  }
  

  return (
    <div className="page">
      <Header />
      <Main 
        onEditProfile = {handleEditProfileClick}
        onAddPlace = {handleAddPlaceClick}
        onEditAvatar = {handleEditAvatarClick}
        />  
      <Footer />
      <PopupWithForm 
        isOpen = {isEditProfilePopupOpen}
        onClose = {closeAllPopups}
        title = "Редактировать профиль"
        name = "edit-profile" 
        titleBtn = "Сохранить"
        children = {
          <>
            <input id="nameUser" className="popup__input popup__input_name" type="text" name="nameUser" value="" placeholder="Имя" minLength="2" maxLength="40" required />
            <span id="nameUser-error" className="error"></span>
            <input id="aboutUser" className="popup__input popup__input_info" type="text" name="aboutUser" value="" placeholder="О себе" minLength="2" maxLength="200" required />
            <span id="aboutUser-error" className="error"></span>
          </>
        }
      />
      <PopupWithForm 
        isOpen = {isAddPlacePopupOpen}
        onClose = {closeAllPopups}
        title = "Новое место"
        name = "add-cards" 
        titleBtn = "Создать"
        children = {
          <>
            <input id="nameCard" className="popup__input popup__input_title" placeholder="Название" type="text" name="cardName" value="" minLength="2" maxLength="30" required />
            <span id="nameCard-error" className="error"></span>
            <input id="urlCard" className="popup__input popup__input_link" placeholder="Ссылка на картинку" type="url" name="cardUrl" value="" required />
            <span id="urlCard-error" className="error"></span>
          </>
        }
      />
      <PopupWithForm 
        isOpen = {isEditAvatarPopupOpen}
        onClose = {closeAllPopups}
        title = "Обновить аватар"
        name = "update-avatar" 
        titleBtn = "Сохранить"
        children = {
          <>
            <input id="urlAvatar" className="popup__input popup__input_link" placeholder="Ссылка" type="url" name="avatarUrl" value="" required />
            <span id="urlAvatar-error" className="error"></span>
          </>
        }
      />
      <PopupWithForm 
        title = "Вы уверены?"
        name = "delete-card" 
        titleBtn = "Да"
      />
      <ImagePopup 
        card = {selectedCard}/>

      
    </div>
  )
}

export default App;
