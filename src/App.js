import React, { useState, useEffect }  from 'react';
import axios from 'axios'

import './App.css';
import logo from './img/logo.svg';
import loader from './img/loader.svg'
import 'typeface-roboto';

import {Menu} from  './Menu/Menu'
import {FilmList} from './FilmList'
import {FullInfo} from './FullInfo/FullInfo'

export const App = () => {

  const [isLoading, setLoading] = useState(true);
  const [title, setTitle] = useState('Film Store');
  const [filmData, setFilmData] = useState([]);
  const [filmDetails, setFilmDetails] = useState();
  const [lang, setLang] = useState('en-EN');

  const apiUrl =  'https://api.themoviedb.org/3/movie/'
  const apiKey = '?api_key=14800cc9ec0087dda08a2762746a6750'
  const getData = (type = 'popular', arg = '') => (axios.get(apiUrl + type + apiKey + arg + '&language=' + lang))

  const handleGetFilm = (type) => getData(type).then(response => setFilmData(response.data.results))
  const handleGetFullInfo = (id) => getData(id).then(response => setFilmDetails(response.data))

  useEffect(() => {
    getData().then(response => setFilmData(response.data.results))
    setLoading(false)
  }, [isLoading]);

  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="logo" alt="logo" height="64"/>
        <Menu handleGetFilm={handleGetFilm} setTitle={setTitle}/>
      </header>
      <main className="main">
        <h1 className="page-title">{title}</h1>

        {filmDetails && <FullInfo film={filmDetails} />}

        {!isLoading ?
            <FilmList filmData={filmData} handleGetFullInfo={handleGetFullInfo} />
            :
            <img src={loader} className="loader" alt="loader" />
        }
      </main>
    </div>
  );
}
