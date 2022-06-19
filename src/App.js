import logo from "./logo.svg";
import "./App.scss";
import Card from "./components/Card";
 

function App() {
  const fakeData = {
    cards: [
      {
        id: 1,
        title: "с фуа-гра",
        subtitles: ["10 порций", "мышь в подарок"],
        weight: `${0},${5}`,
        disabled: false,
        selected: false,
        subtext: "Печень утки разварная с артишоками.",
        isFirstClick:true
      },
      {
        id: 2,
        title: "с рыбой",
        subtitles: ["40 порций", "2 мыши в подарок"],
        weight: 2,
        disabled: false,
        selected: false,
        subtext: "Головы щучьи с чесноком да свежайшая сёмгушка.",
        isFirstClick:true
      },
      {
        id: 3,
        title: "с курой",
        subtitles: ["100 порций", "5 мышей в подарок", "заказчик доволен"],
        weight: 5,
        disabled: true,
        selected: false,
        subtext: "Филе из цыплят с трюфелями в бульоне.",
        isFirstClick:true
      },
    ],
  };

  return (
    <div className="App">
      <div className="main-title">
        <h1>Ты сегодня покормил кота?</h1>
      </div>
      <Card data={fakeData.cards} />
    </div>
  );
}

export default App;
