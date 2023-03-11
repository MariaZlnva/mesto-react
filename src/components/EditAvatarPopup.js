import React from 'react';
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup ({isOpen, onClose, onUpdateAvatar}) {

  const [avatarUrl, setAvatarUrl] = React.useState("");
  const avatarUrlRef = React.useRef(""); // вернет объект, к-рый с пом ref атрибута можно присвоить элементу для получен доступа к нему. объект содерж.поле current  - туда реает запишет указатель на дом эл-т

  function handleInputClick (evt) {
    setAvatarUrl(evt.target.value)
  }

  function handleSubmit(evt) {
    evt.preventDefault();
  
    onUpdateAvatar({
      avatar: avatarUrlRef.current.value /* Значение инпута, полученное с помощью рефа */
    });
  }


  return(
    <PopupWithForm
          onSubmit={handleSubmit}
          isOpen={isOpen}
          onClose={onClose}
          title="Обновить аватар"
          name="update-avatar"
          titleBtn="Сохранить"
        >
          <input
            ref = {avatarUrlRef}
            id="urlAvatar"
            className="popup__input popup__input_link"
            placeholder="Ссылка"
            type="url"
            name="avatarUrl"
            value= {avatarUrl}
            required
            onChange = {handleInputClick}
          />
          <span id="urlAvatar-error" className="error"></span>
        </PopupWithForm>
  )
}

export default EditAvatarPopup;