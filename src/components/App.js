// import logo from '../logo.svg';
import '../styles/App.css';
import '../styles/index.css';
import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';

function App() {
  return (
    <div>
      <Banner/>
      <Cart />
      <ShoppingList />
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
