import React, { useState, useEffect }  from 'react';
import axios from 'axios'

import './App.css';
import logo from './logo.svg';
import loader from './loader.svg'
import 'typeface-roboto';

import {Menu} from  './Menu/Menu'
import {FilmList} from './FilmList'

function App() {
  const apiKey = '?api_key=14800cc9ec0087dda08a2762746a6750'
  const getFilmList = (type = 'popular', arg = '') => (
    axios.get('https://api.themoviedb.org/3/movie/' + type + apiKey + arg)
  )

  const [isLoading, setLoading] = useState(true);
  const [title, setTitle] = useState('Film Store');
  const [filmData, setFilmData] = useState([]);

  const handleGetFilm = (type) => {
    getFilmList(type).then(response => setFilmData(response.data.results))
  }

  useEffect(() => {
    getFilmList().then(
        response => setFilmData(response.data.results)
    )
    setLoading(false)
  }, [isLoading]);

  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <Menu handleGetFilm={handleGetFilm} setTitle={setTitle}/>
      </header>
      <main className="main">
        <h1 className="page-title">{title}</h1>
        {!isLoading ?
            <FilmList filmData={filmData}/>
            :
            <img src={loader} className="loader" alt="loader" />
        }
      </main>
    </div>
  );
}

export default App;
