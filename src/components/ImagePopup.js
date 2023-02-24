import React from 'react';

function ImagePopup () {
  
  return (

    <div className="popup popup_big-picture">
      <div className="popup__content-big">
        <img src="#" alt=" " className="popup__image-big" />
        <button aria-label="Закрыть" className="popup__close" type="button"></button>
        <h2 className="popup__title-big"></h2>
      </div>
    </div>

  );
}

export default ImagePopup ;

  
{/* <div className="popup popup_big-picture">
<div className="popup__content-big">
  <img src="#" alt=" " className="popup__image-big" />
  <button aria-label="Закрыть" className="popup__close" type="button"></button>
  <h2 className="popup__title-big"></h2>
</div>
</div>

</div>  */}
