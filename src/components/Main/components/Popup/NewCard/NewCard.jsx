import { useState, useContext } from "react";
import CurrentUserContext from "../../../../../contexts/CurrentUserContext";

export default function NewCard() {
  const { handleAddPlaceSubmit } = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    handleAddPlaceSubmit({ name, link });
  }

  return (
    <form id="new-card-form" onSubmit={handleSubmit}>
      <label className="popup__field">
        <input
          name="title"
          type="text"
          id="title-input"
          className="popup__input popup__input-name"
          placeholder=" Título"
          minLength="2"
          maxLength="30"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span className="popup__input-error title-input-error"></span>
      </label>
      <label className="popup__field">
        <input
          name="link"
          type="url"
          id="url-input"
          className="popup__input popup__input-about"
          placeholder=" Enlace a la imagen"
          required
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <span className="popup__input-error url-input-error"></span>
      </label>
    </form>
  );
}

