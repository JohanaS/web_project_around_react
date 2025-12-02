export default function EditAvatar() {
  return (
    <>
      <label className="popup__field">
        <input name="avatar" type="url" id="avatar-input" className="popup__input popup__input-avatar" placeholder=" Enlace a la imagen" required />
        <span className="popup__input-error avatar-input-error"></span>
      </label>
    </>
  )
}
