import React, {useState, useEffect, useCallback} from 'react';
import './Styles/App.scss';
import {ReactComponent as Watermark} from './Styles/watermark.svg';
import SearchBar from './Components/SearchBar';
import PersonList from './Components/PersonList';

function App() {
  const [winWidth, setWindowWidth] = useState(0);
  const [queryString, setQueryString] = useState('');

  useEffect(() => {
      updateDimensions();
      window.addEventListener("resize", updateDimensions);
      return () => {
          window.removeEventListener("resize", updateDimensions);
      }
  }, []);

  const updateDimensions = () => {
      const winWidth = window.innerWidth;
      setWindowWidth(winWidth);
  }

  const updateQuery = useCallback(
      (currQuery: string) => {
          setQueryString(currQuery);
    }, []);

  const appWidth = {
      width: (winWidth > 1024) ? 575 : (winWidth > 768) ? 500 : (winWidth > 480) ? 400 : 300
  }
  return (
      <div>
          <Watermark className="Watermark"/>
          <div className="App" style={appWidth}>
            <h1>The Person Finder</h1>
            <p>If you just can't find someone and need to know what they look like, you've come to the right place! Just type the name of the person you are looking for below in the search box!</p>
            <SearchBar onChange={updateQuery}></SearchBar>
            <PersonList queryString={queryString} />
        </div>
      </div>
    
  );
}

export default App;
