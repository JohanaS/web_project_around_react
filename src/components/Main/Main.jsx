import { useEffect, useState, useContext } from "react";
import Popup from "./components/Popup/Popup.jsx";
import EditAvatar from "./components/Popup/EditAvatar/EditAvatar.jsx";
import EditProfile from "./components/Popup/EditProfile/EditProfile.jsx";
import NewCard from "./components/Popup/NewCard/NewCard.jsx";
import Card from "./components/Card/Card.jsx";
import ImagePopup from "./components/Popup/ImagePopup/ImagePopup.jsx";
import RemoveCard from "./components/Popup/RemoveCard/RemoveCard.jsx";
import { api } from "../../utils/api.js";
import  CurrentUserContext  from "../../contexts/CurrentUserContext.js";

// const cards = [
//   {
//     createdAt: "2025-11-21T20:45:19.593Z",
//     isLiked: true,
//     link: "https://www.eluniversal.com.mx/resizer/v2/FONKJJXRC5CJFGOSGZZRLIOQEU.jpg?auth=ba689b12e44e6f08fb6a4dd227df1e83ad47f0c23a95a9c5759787af6e0904b3&smart=true&width=1100&height=666",
//     name: "Oaxaca",
//     owner: "bb48559270a68cd71830251c",
//     _id:    "6920cf5f9910450019ded240"
//   },
//   {
//     createdAt: "2025-11-02T20:59:38.028Z",
//     isLiked: true,
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
//     name: "Lago de Braies",
//     owner: "bb48559270a68cd71830251c",
//     _id: "6907c63ab08083001ae894f2",
//   },
//   {
//     createdAt: "2025-11-02T20:59:06.021Z",
//     isLiked: false,
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
//     name: "Parque Nacional del Valnoise",
//     owner: "bb48559270a68cd71830251c",
//     _id: "6907c61ab08083001ae894ee"
//   },
//   {
//     createdAt: "2025-11-02T20:58:30.743Z",
//     isLiked: true,
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
//     name: "Latemar",
//     owner: "bb48559270a68cd71830251c",
//     _id: "6907c5f6b08083001ae894ea"
//   },
//   {
//     createdAt: "2025-11-02T20:57:29.857Z",
//     isLiked: true,
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
//     name: "Valle de Yosemite",
//     owner: "bb48559270a68cd71830251c",
//     _id: "6907c5b9b08083001ae894dc"
//   },
//   {
//     createdAt: "2025-11-02T20:56:28.600Z",
//     isLiked: true,
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
//     name: "Lago Louise",
//     owner: "bb48559270a68cd71830251c",
//     _id: "6907c57cb08083001ae894b1"
//   }
// ];

export function Main() {
    const [popup, setPopup] = useState(null);
    const [selectedCard, setSelectedCard] = useState(null);
    const [cards, setCards] = useState([]);
    const currentUser = useContext(CurrentUserContext);

    const newEditAvatar = {
      title: "Cambiar foto de perfil",
      children: <EditAvatar />,
    };

    const newEditProfile = {
      title: "Editar perfil",
      children: <EditProfile />,
    };

    const newCardPopup = {
      title: "Nuevo lugar",
      children: <NewCard />,
    };

    useEffect(() => {
      api.getInitialCards()
        .then((data) => {
          setCards(data);
        })
        .catch((err) => {
          console.log("No se logró obtener las tarjetas:", err);
        });
    }, []);

    function handleOpenPopup(popup) {
      setPopup(popup);
    }
    function handleClosePopup() {
      setPopup(null);
      setSelectedCard(null);
    }
    function handleCardClick(card) {
      setSelectedCard(card);
    }
    function handleCardDelete(card) {
      setPopup({
        title: "¿Estás seguro?",
        children: <RemoveCard />,
        buttonText: "Sí"
      });
    }

    return (
      <main className="content">
        <section className="profile">
          <div>
            <div className="profile__info">
              <div className="profile__avatar-container">
                <img name="avatar" src={currentUser.avatar} className="profile__avatar" alt="imagen-usuario"/>
                <span name="editImage" className="profile__edit-icon" type="button" onClick={() => handleOpenPopup(newEditAvatar)}></span>
              </div>
              <div>
                <div className="profile__edition">
                  <h2 className="profile__name">{currentUser.name}</h2>
                  <button className="profile__edit-button" type="button" onClick={() => handleOpenPopup(newEditProfile)}></button>
              </div>
              <div>
                <p className="profile__position">{currentUser.about}</p>
              </div>
            </div>
            </div>
          </div>
          <button className="profile__add-button" type="button" onClick={() => handleOpenPopup(newCardPopup)}>+</button>
        </section>
        <section className="cards-container">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={handleCardClick}
              onCardDelete={handleCardDelete}
            />
          ))}
        </section>
        {popup && (
          <Popup onClose={handleClosePopup} title={popup.title} buttonText={popup.buttonText}>
            {popup.children}
          </Popup>
        )}
        <ImagePopup card={selectedCard} onClose={handleClosePopup} />
      </main>
    );
  }

export default Main;