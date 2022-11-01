import "./SingleCard.css"

export default function SingleCard({ card, handleChoice, flipped, disabled }) {

  const handleClick = () => {
    if(!disabled){
      handleChoice(card)
      //if card is not disabled, continuet to be able to choose card
    }
  }

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        {/* if flipped is true, div will have flipped class name */}
        <img className="front" src={card.src} alt="card front" />
        <img className="back" onClick={handleClick} src="/img/cover.png" alt="card back" />
      </div>
    </div>
  );
}