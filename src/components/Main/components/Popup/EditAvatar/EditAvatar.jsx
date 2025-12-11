import { useRef, useContext } from "react";
import CurrentUserContext from "../../../../../contexts/CurrentUserContext";

export default function EditAvatar() {
  const { handleUpdateAvatar } = useContext(CurrentUserContext);
  const avatarRef = useRef('');

  function handleSubmit(e) {
    e.preventDefault();
    handleUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }
  return (
    <form className="profile__edit-icon" onSubmit={handleSubmit} id="edit-avatar-form">
      <label className="popup__field">
        <input ref={avatarRef} name="avatar" type="url" id="avatar-input" className="popup__input popup__input-avatar" placeholder=" Enlace a la imagen" required />
        <span className="popup__input-error avatar-input-error"></span>
      </label>
    </form>
  )
}
