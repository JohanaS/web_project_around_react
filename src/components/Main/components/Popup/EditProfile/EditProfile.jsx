export default function EditProfile() {
  return (
    <>
      <label className="popup__field">
        <input name="name" type="text" id="name-input" className="popup__input popup__input-name" placeholder=" Nombre" minLength="2" maxLength="40" required />
        <span className="popup__input-error name-input-error"></span>
      </label>
      <label className="popup__field">
        <input name="about" type="text" id="about-input" className="popup__input popup__input-about" placeholder=" Sobre mí" minLength="2" maxLength="200" required />
        <span className="popup__input-error about-input-error"></span>
      </label>
    </>
  )
}

