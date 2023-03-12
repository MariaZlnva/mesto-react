import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarUrlRef = React.useRef(""); // вернет объект, к-рый с пом ref атрибута можно присвоить элементу для получен доступа к нему. объект содерж.поле current  - туда реает запишет указатель на дом эл-т

  React.useEffect(() => {
    avatarUrlRef.current.value = "";
  });

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateAvatar({
      avatar:
        avatarUrlRef.current
          .value /* Значение инпута, полученное с помощью рефа */,
    });
    // setAvatarUrl("")
  }

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      isOpen={isOpen}
      onClose={onClose}
      title="Обновить аватар"
      name="update-avatar"
    >
      <input
        ref={avatarUrlRef}
        id="urlAvatar"
        className="popup__input popup__input_link"
        placeholder="Ссылка"
        type="url"
        name="avatarUrl"
        // value= ''
        required
        // onChange = {handleInputClick}
      />
      <span id="urlAvatar-error" className="error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
