import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <div className="app-container">
        <div className="header">
          <h1>Counter App</h1>
          <button 
            className="theme-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>

        <div className="counter-box">
          <h2>Count: {count}</h2>
          <div className="button-group">
            <button 
              className="btn btn-minus"
              onClick={() => setCount(count - 1)}
            >
              ➖ Decrease
            </button>
            <button 
              className="btn btn-reset"
              onClick={() => setCount(0)}
            >
              🔄 Reset
            </button>
            <button 
              className="btn btn-plus"
              onClick={() => setCount(count + 1)}
            >
              ➕ Increase
            </button>
          </div>
        </div>

        <div className="info">
          <p>Current value is <strong>{count}</strong></p>
          <p>{count > 0 && '🎉'} {count < 0 && '❄️'} {count === 0 && '😐'}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
