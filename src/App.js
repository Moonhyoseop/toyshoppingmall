import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="topBar">
          <ul className="ulist">
            <li>Login</li>
            <li>MyPage</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
      <div className="shopName">
        <div className="navBar">
          <ul className="ulist2">
            <li>Home</li>
            <li>Best</li>
            <li>Category</li>
            <li>Sale</li>
          </ul>
        </div>
      </div>
    
    </div>
  );
}

export default App;
