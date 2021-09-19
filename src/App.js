import { useState } from "react";
import "./App.css";

const emojiDictionary = {
  "🧁": "Cupcake",
  "🍷": "Wine",
  "🥨": "Pretzel",
  "🥯": "Bagel",
  "🥞": "Pancakes",
  "🌯": "Burrito",
  "🍿": "Popcorn",
  "🧀": "Cheese",
  "🍕": "Pizza",
  "🍔": "Burger",
  "🌭": "Hot Dog",
  "🌮": "Taco",
  "🥓": "Bacon",
  "🍺": "Beer",
  "🥐": "Croissant",
  "🍣": "Sushi",
  "🍗": "Chicken Leg",
  "🍝": "Spaghetti",
  "🥟": "Dumpling",
  "🎂": "Birthday Cake",
  "🍮": "Custard",
  "🍛": "Curry Rice",
  "🍙": "Rice Ball",
  "🥗": "Green Salad",
};

function App() {
  // const [state, setState] = useState("");
  const [meaning, setMeaning] = useState(
    "Enter some emoji or click anyone of the below to know their meaning !"
  );

  var emojisArr = Object.keys(emojiDictionary);

  function handleChange(e) {
    let data = e.target.value;

    if (data in emojiDictionary) {
      var data1 = emojiDictionary[data];
    } else if (data === "") {
      data1 = "Enter the food emoji or click from the below items";
    } else {
      data1 = "We dont have that emoji in our DataBase";
    }
    setMeaning(data1);
  }

  const emojiCLickHandler = (item) => {
    var meaning = emojiDictionary[item];

    setMeaning(meaning);
  };

  return (
    <div className="App">
      <h1>Food Emoji Identifier</h1>

      <hr />
      <input onChange={handleChange} placeholder="Enter Emoji here" />

      <h2>{meaning}</h2>
      <hr className="hr" />
      <div className="container">
        <div className="span"></div>
        {emojisArr.map((item) => {
          return (
            <span onClick={() => emojiCLickHandler(item)} key={item}>
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default App;
