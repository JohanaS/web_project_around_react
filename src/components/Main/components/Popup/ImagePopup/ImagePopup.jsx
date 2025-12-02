function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup ${card ? 'popup_is-opened' : ''}`}>
      <div className="popup__image-container">
        <button className="popup__close-button" type="button" onClick={onClose}/>
        <img className="popup__image" src={card?.link} alt={card?.name}/>
        <p className="popup__image-title">{card?.name}</p>
      </div>
    </div>
  )
}
export default ImagePopup;

