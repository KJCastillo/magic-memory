import { useEffect, useState } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard";

const cardImages = [
  { src: "/img/helmet-1.png" },
  { src: "/img/potion-1.png" },
  { src: "/img/ring-1.png" },
  { src: "/img/scroll-1.png" },
  { src: "/img/shield-1.png" },
  { src: "/img/sword-1.png" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      //spread operator to add images to var & to duplicate
      .sort(() => Math.random() - 0.5)
      //returns a shuffled array of card images
      .map((card) => ({ ...card, id: Math.random() }));
    //returns an object and adds an ID to each

    setCards(shuffledCards);
    //updates cards state to shuffled cards

    setTurns(0);
    //will reset turn counter
  };

  //handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    //if choiceOne is null, setChoiceOne to the card clicked
    //if choiceOne is not null, then setChoiceTwo to the card clicked
  };

  //compare cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        console.log("match");
        resetTurn();
      } else {
        console.log("try again");
        resetTurn();
      }
    }
  }, [choiceOne, choiceTwo]);
  //if choiceOne is updated, function runs, same with choiceTwo
  //but something only happens if both of them have values

  //reset choices & increase a turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
  };

  return (
    <div className="App">
      <h1>Magic Memory</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard card={card} key={card.id} handleChoice={handleChoice} />
        ))}
      </div>
    </div>
  );
}

export default App;
