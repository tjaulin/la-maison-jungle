// import logo from '../logo.svg';
import '../styles/App.css';
import '../styles/index.css';
import logo from '../assets/logo.png'
import Banner from './Banner';
import Cart from './Cart';
import Footer from './Footer';
import ShoppingList from './ShoppingList';
import { useState, useEffect } from 'react';

function App() {
  // const [cart, updateCart] = useState([]);
  const [categoryPlant, setCategoryPlant] = useState('default');
  const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])

  useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

  return (
    <div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} categoryPlant={categoryPlant} setCategoryPlant={setCategoryPlant} />
			</div>
			<Footer />
		</div>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <Banner />
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Hello 👋👋
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //       <p>N'oublie pas de voté !</p>
  //     </header>
  //   </div>
  // );
}

export default App;
