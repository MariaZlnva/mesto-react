import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'

function App() {

  const body = document.getElementsByTagName('body')[0];
  body.classList = "page"
 

  //переменные состояния, отвечающие за видимость трёх попапов:
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditProfileClick () {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen)
  }
  function handleAddPlaceClick () {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen)
  }
  function handleEditAvatarClick () {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen)
  }

  function handleCardClick (card) {
    setSelectedCard(card)
  }
  console.log(selectedCard)

  function closeAllPopups () {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null)
  }
  
  function handleInputClick (evt) {
    console.log(evt.target.value)
  }

  return (
    // <div className="page">
    <div>
      <Header />
      <Main 
        onEditProfile = {handleEditProfileClick}
        onAddPlace = {handleAddPlaceClick}
        onEditAvatar = {handleEditAvatarClick}
        onCardClick = {handleCardClick}
        />  
      <Footer />

      <PopupWithForm 
        isOpen = {isEditProfilePopupOpen}
        onClose = {closeAllPopups}
        title = "Редактировать профиль"
        name = "edit-profile" 
        titleBtn = "Сохранить"
      >
        < input id="nameUser" className="popup__input popup__input_name" type="text" name="nameUser" value="" placeholder="Имя" minLength="2" maxLength="40" required onChange = {handleInputClick}/>
        <span id="nameUser-error" className="error"></span>
        <input id="aboutUser" className="popup__input popup__input_info" type="text" name="aboutUser" value="" placeholder="О себе" minLength="2" maxLength="200" required onChange = {handleInputClick}/>
        <span id="aboutUser-error" className="error"></span>
      </PopupWithForm>

      <PopupWithForm 
        isOpen = {isAddPlacePopupOpen}
        onClose = {closeAllPopups}
        title = "Новое место"
        name = "add-cards" 
        titleBtn = "Создать"
      >
        <input id="nameCard" className="popup__input popup__input_title" placeholder="Название" type="text" name="cardName" value="" minLength="2" maxLength="30" required onChange = {handleInputClick}/>
        <span id="nameCard-error" className="error"></span>
        <input id="urlCard" className="popup__input popup__input_link" placeholder="Ссылка на картинку" type="url" name="cardUrl" value="" required onChange = {handleInputClick}/>
        <span id="urlCard-error" className="error"></span>    
      </PopupWithForm>

      <PopupWithForm 
        isOpen = {isEditAvatarPopupOpen}
        onClose = {closeAllPopups}
        title = "Обновить аватар"
        name = "update-avatar" 
        titleBtn = "Сохранить"
      >       
        <input id="urlAvatar" className="popup__input popup__input_link" placeholder="Ссылка" type="url" name="avatarUrl" value="" required onChange = {handleInputClick}/>
        <span id="urlAvatar-error" className="error"></span>
     </PopupWithForm>

      <PopupWithForm 
        title = "Вы уверены?"
        name = "delete-card" 
        titleBtn = "Да"
      />

      <ImagePopup 
        card = {selectedCard}
        onClose = {closeAllPopups}
        />

      
    </div>
  )
}

export default App;

