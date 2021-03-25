import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './PokemonList.css';

const Home = () => {
  const [pokedex, setPokedex] = useState();
  const [input, setInput] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://pokeapi.co/api/v2/pokemon/');
      setPokedex(result.data.results);
    };

    fetchData();
    console.log(pokedex);
  }, []);

  const onChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const filteredPokedex = pokedex?.filter((item) =>
    item.name.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <Fragment>
      <div className='search'>
        <input
          type='text'
          value={input}
          onChange={onChange}
          placeholder='Search for pokemon'
        />
      </div>

      <div className='content'>
        <ul>
          {filteredPokedex?.map((item) => (
            <li key={item.name}>
              <img
                src={`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${
                  item.url.split('/')[item.url.split('/').length - 2]
                }.png?raw=true`}
                alt=''
              />
              <Link to={item.url.split('/')[item.url.split('/').length - 2]}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default Home;
