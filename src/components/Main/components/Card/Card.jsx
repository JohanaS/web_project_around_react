import { useContext } from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext.js";

function Card({ card, onCardClick, onCardDelete, onCardLike }) {
  const { currentUser } = useContext(CurrentUserContext);
  const isLiked = card.likes?.some(i => i._id === currentUser._id);

  const cardLikeButtonClassName = `cards__item-like ${isLiked ? 'cards__item-like-selected' : ''}`;

  function handleLikeClick() {
    onCardLike(card);
  }
  function handleDelete() {
    onCardDelete(card);
  }
  return (
      <article className="cards__item">
        <img src={card.link} alt={card.name} className="cards__item-img" onClick={() => onCardClick(card)} />
        <button name="delete" type="button" className="cards__item-delete" onClick={handleDelete}></button>
        <div className="cards__item-info">
          <p className="cards__item-text">{card.name}</p>
          <button name="like" type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
        </div>
    </article>
  );
 }
export default Card;

