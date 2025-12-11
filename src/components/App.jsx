
import Header from './Header/Header.jsx';
import Main from './Main/Main.jsx';
import Footer from './Footer/Footer.jsx';
import { useEffect, useState } from 'react';
import { api } from '../utils/api.js';
import CurrentUserContext from '../contexts/CurrentUserContext.js';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    (async () => {
      await api.getUserInfo().then((data) => {
        setCurrentUser(data);
      });
    })();
    (async () => {
      await api.getInitialCards().then((data) => {
        setCards(data);
      });
    })();
  }, []);

  const handleOpenPopup = (popup) => {
    setPopup(popup);
  };

  const handleClosePopup = () => {
    setPopup(null);
  };

  const handleUpdateUser = (data) => {
    (async () => {
      await api
      .setUserInfo(data)
      .then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      })
      .catch((err) => {
        console.log("No se pudo actualizar la información del usuario:", err);
      });
    })();
  };

  const handleUpdateAvatar = (data) => {
    (async () => {
      await api
      .editAvatar(data.avatar)
      .then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      })
      .catch((err) => {
        console.log("No se pudo actualizar el avatar del usuario:", err);
      });
    })();
  }

  const handleCardLike = (card) => {
    const isLiked = card.likes?.some(i => i._id === currentUser._id);
    (async () => {
      await api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch((err) => {
        console.log("No se pudo actualizar el estado del me gusta:", err);
      });
    })();
  };

  const handleCardDelete = (card) => {
    (async () => {
      await api.deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((err) => {
        console.log("No se pudo eliminar la tarjeta:", err);
      });
    })();
  };

  const handleAddPlaceSubmit = (data) => {
    (async () => {
      await api
      .createCard(data.name, data.link)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        handleClosePopup();
      })
      .catch((err) => {
        console.log("No se pudo agregar la nueva tarjeta:", err);
      });
    })();
  };

  return (
    <>
      <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser,handleUpdateAvatar, handleAddPlaceSubmit }}>
        <div className="page">
          <Header />
          <Main
            onOpenPopup={handleOpenPopup}
            onClosePopup={handleClosePopup}
            popup={popup}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
          <Footer />
        </div>
      </CurrentUserContext.Provider>
    </>
  )
}

export default App
