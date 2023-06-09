import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

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
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  //   const style = {
  //     color: 'red',
  //     fontSize: '64px',
  //     textTransform: 'uppercase',
  //   };
  return (
    <header className='header'>
      <h1>Sam's Pizza Co.</h1>;
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <div className='menu'>
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Serving up the best, New York style pizza in Austin, Texas.
            Hand-tossed every day and made fresh, just for YOU with ingredients
            carefully sourced and crafted with love
          </p>
          <ul className='pizzas'>
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}

      {/* <Pizza
        name='Pizza Margherita'
        ingredients='Tomato and mozzarella'
        photoName='pizzas/margherita.jpg'
        alt='margherita pizza'
        price={10}
      />

      <Pizza
        name='Pizza Funghi'
        ingredients='Tomato and mushrooms'
        price={12}
        photoName='pizzas/funghi.jpg'
        alt='funghi pizza'
      /> */}
    </div>
  );
}

function Pizza({ pizzaObj }) {
  console.log(pizzaObj);

  //   if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.alt}></img>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>

        <p>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price}</p>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert(`We're currently open!`); else alert(`Sorry, we are currently closed`);
  // return React.createElement('footer', null, 'Hours: Mon-Sun 11am - 10pm')

  return (
    <footer className='footer'>
      {isOpen ? (
        <Order openHours={openHour} closeHour={closeHour} />
      ) : (
        <p>Oops! Looks like we're closed. Come back and see us tomorrow!</p>
      )}
    </footer>
  );
}

function Order({ openHour, closeHour }) {
  return (
    <div className='order'>
      <p>
        We're open from 11am - 10pm every day. Come by and see us or place an
        order online!
      </p>
      <button className='btn'>Order Online</button>
    </div>
  );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
