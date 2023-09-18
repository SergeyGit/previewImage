import {Helmet} from "react-helmet";
import logo from './logo.svg';
import './App.css';

const previewImage = 'https://gcdn.tranzzo.com/static/images/mp-banner.png';

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
        {/*{previewImage && <meta data-rh="true" property="og:image" content={previewImage} />}*/}
        {/*{previewImage && <meta data-rh="true" name="twitter:image" content={previewImage} />}*/}
      </Helmet>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
