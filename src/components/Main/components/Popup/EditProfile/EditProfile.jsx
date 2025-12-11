import { useState, useContext } from 'react';
import CurrentUserContext from '../../../../../contexts/CurrentUserContext';

export default function EditProfile() {
  const userContext = useContext(CurrentUserContext);
  const { currentUser, handleUpdateUser } = userContext;

  const [name, setName] = useState(currentUser.name);
  const [about, setAbout] = useState(currentUser.about);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAboutChange = (e) => {
    setAbout(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateUser({
      name,
      about,
    });
  }

  return (
    <form id="edit-profile-form" onSubmit={handleSubmit}>
      <label className="popup__field">
        <input name="name" type="text" id="name-input" className="popup__input popup__input-name" placeholder=" Nombre" minLength="2" maxLength="40" required value={name} onChange={handleNameChange} />
        <span className="popup__input-error name-input-error"></span>
      </label>
      <label className="popup__field">
        <input name="about" type="text" id="about-input" className="popup__input popup__input-about" placeholder=" Sobre mí" minLength="2" maxLength="200" required value={about} onChange={handleAboutChange} />
        <span className="popup__input-error about-input-error"></span>
      </label>
    </form>
  )
}

