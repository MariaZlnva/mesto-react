import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { api } from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {
  const body = document.getElementsByTagName("body")[0];
  body.classList = "page";

  const [currentUser, setCurrentUser] = React.useState("");
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [cards, setCards] = React.useState([]);
  //переменные состояния, отвечающие за видимость трёх попапов:
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  React.useEffect(() => {
    api
      .getInitialData()
      .then(([dataUser, cardsServer]) => {
        setCurrentUser(dataUser);
        setCards(cardsServer);
      })
      .catch((err) => console.log("Error getInitialData!"));
  }, []);


  function handleUpdateUser (dataInput) {
    api.changeProfileData(dataInput)
    .then((res) => {
      console.log(res)
      setCurrentUser(res)
      closeAllPopups()
    })
  }

  function handleUpdateAvatar (dataAvatar) {
    api.changeAvatar(dataAvatar)
    .then((res) => {
      console.log(res)
      setCurrentUser(res)
      closeAllPopups()
    })
  }


  function handleAddPlaceSubmit(dataCard) {  
    api.addNewCard(dataCard)
    .then((newCard) => {
      closeAllPopups();
      setCards([newCard, ...cards])    
    })
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }


  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }


  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    (isLiked ? api.deleteLike(card._id) : api.addLike(card._id))
      .then((updateDataCard) => {
        setCards(
          (state) => state.map((c) => (c._id === card._id ? updateDataCard : c))
        );
      })
      .catch((err) => console.log("Error button-like processing!!!"));
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
    .then((res) => {
      setCards( 
        cards.filter((item) => item._id !== card._id)
      )})
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div>
        <Header />
        <Main
          cards={cards}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete = {handleCardDelete}

        />
        <Footer />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser ={handleUpdateUser} />
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace = {handleAddPlaceSubmit}/>
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar = {handleUpdateAvatar}/>

        <PopupWithForm title="Вы уверены?" name="delete-card" titleBtn="Да" />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
