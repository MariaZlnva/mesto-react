import React from 'react';
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup ({isOpen, onClose, onAddPlace}) {
  const [nameCard, setNameCard] = React.useState("");
  const [urlCard, setUrlCard] = React.useState("");

  function handleInputNameClick(evt) {
    setNameCard(evt.target.value);
    
  }

  function handleInputUrlClick (evt){
    setUrlCard(evt.target.value)
  }

  function handleAddPlaceSubmit(evt) {
    evt.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onAddPlace({
      nameCard,
      urlCard
    });

    setNameCard("");
    setUrlCard("")
  }

  return(
    <PopupWithForm
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={handleAddPlaceSubmit}
          title="Новое место"
          name="add-cards"
          titleBtn="Создать"
        >
          <input
            id="nameCard"
            className="popup__input popup__input_title"
            placeholder="Название"
            type="text"
            name="cardName"
            value={nameCard}
            minLength="2"
            maxLength="30"
            required
            onChange={handleInputNameClick}
          />
          <span id="nameCard-error" className="error"></span>
          <input
            id="urlCard"
            className="popup__input popup__input_link"
            placeholder="Ссылка на картинку"
            type="url"
            name="cardUrl"
            value={urlCard}
            required
            onChange={handleInputUrlClick}
          />
          <span id="urlCard-error" className="error"></span>
        </PopupWithForm>
  )
}

export default AddPlacePopup;