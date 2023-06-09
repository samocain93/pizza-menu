import React from 'react';
import ReactDOM from 'react-dom/client';

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
];

function App() {
  return (
    <>
      <Header />
      <Menu />
      <Footer />
    </>
  );
}

function Header() {
  return <h1>Sam's Pizza Co.</h1>;
}

function Menu() {
  return (
    <>
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </>
  );
}

function Footer() {
  // return React.createElement('footer', null, 'Hours: Mon-Sun 11am - 10pm')

  return (
    <footer>
      {new Date().toLocaleTimeString()}
      <br></br>
      Daily Hours: 11am - 10pm
      <br></br>
      Come see us!
    </footer>
  );
}

function Pizza() {
  return (
    <>
      <img src='pizzas/margherita.jpg' alt='margherita pizza'></img>
      <h2>Pizza Margherita</h2>
      <p>Tomato and mozarella</p>
    </>
  );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
