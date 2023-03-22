import React from 'react';
import './App.css'; // import external CSS file
import logo from './img/vici.png';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt="Vici Technologies Logo" />
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>
      </header>
      <main>
  <h2>About Us</h2>
  <p>VICI aims to make all devices secure through our applications. With a background in Cyber Secuity and Network Engineering, 
    the founders of VICI aim to protect all users from the evils and threats that come with connecting any of your devices to public internet 
    services. </p>
  <h2>Our App</h2>
  <ul>
    <li>VICI</li>
    
  </ul>
</main>
<div class="coming-soon">Coming Soon</div>
<footer>
  <p>&copy; 2023 Vici Technologies</p>
</footer>

    </div>
  );
}

export default App;
