export default function NewCard() {
  return (
    <>
      <label className="popup__field">
        <input name="title" type="text" id="title-input" className="popup__input popup__input-name" placeholder=" Título" minLength="2" maxLength="30" required />
        <span className="popup__input-error title-input-error"></span>
      </label>
      <label className="popup__field">
        <input name="link" type="url" id="url-input" className="popup__input popup__input-about" placeholder=" Enlace a la imagen" required />
        <span className="popup__input-error url-input-error"></span>
      </label>
    </>
  )
}

