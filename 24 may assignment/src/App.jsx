import './App.css';
import Friend from './Friends';

function App() {
  const animals = [
    {
      name: "African Elephant",
      age: 25,
      hobby: "Spraying water",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg",
      contact: "elephant@savanna.com",
      quote: "I never forget a face!"
    },
    {
      name: "Red Panda",
      age: 5,
      hobby: "Climbing trees and eating bamboo",
      image: "https://upload.wikimedia.org/wikipedia/commons/f/f4/RedPandaFullBody.JPG",
      contact: "redpanda@forest.com",
      quote: "Small, fluffy, and fabulous!"
    },
    {
      name: "Blue Whale",
      age: 80,
      hobby: "Singing in the deep ocean",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Bluewhale_1.jpg",
      contact: "bluewhale@ocean.com",
      quote: "The sea is my symphony."
    },
    {
      name: "Snow Leopard",
      age: 12,
      hobby: "Hiding in the snow",
      image: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Uncia_uncia.jpg",
      contact: "snowleopard@mountains.com",
      quote: "Stealth is my style."
    },
    {
      name: "Macaw Parrot",
      age: 20,
      hobby: "Mimicking sounds",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Blue-and-Yellow-Macaw.jpg",
      contact: "macaw@jungle.com",
      quote: "Polly wants a cracker!"
    },
  ];

  return (
    <div className="app-background">
  <div className="main-container">
    <h1>Animal Friends</h1>
    <div className="cards-grid">
      <Friend {...animals[0]} />
      <Friend {...animals[1]} />
      <Friend {...animals[2]} />
      <Friend {...animals[3]} />
      <Friend {...animals[4]} />
    </div>
  </div>
</div>

  );
}

export default App;
