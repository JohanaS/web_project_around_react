
function Card(props) {
  const { card, onCardClick, onCardDelete, onCardLike } = props;
  const {name, link, isLiked, _id} = card;

  const cardLikeButtonClassName = `cards__item-like ${isLiked ? 'cards__item-like-selected' : ''}`;
  function handleLikeClick() {
    onCardLike(card);
  }
  return (
      <article className="cards__item">
        <img src={link} alt={name} className="cards__item-img" onClick={() => onCardClick(card)} />
        <button name="delete" type="button" className="cards__item-delete" onClick={() => onCardDelete(card)}></button>
        <div className="cards__item-info">
          <p className="cards__item-text">{name}</p>
          <button name="like" type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
        </div>
    </article>
  );
 }
export default Card;

