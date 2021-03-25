import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './PokemonDetails.css';

const PokemonDetails = () => {
  const [pokemon, setPokemon] = useState('');
  const [description, setDescription] = useState('');
  const id = useParams().id;
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`);
      setPokemon(result.data);
    };

    fetchData();
  }, [id]);
  console.log(pokemon);
  //   async function getFavText(fav_url) {
  //     return await axios(fav_url);
  //   }
  const ability_url = pokemon?.abilities?.map((ab) => ab?.ability.url);
  const fav_text = ability_url?.map((fav) =>
    axios(fav)
      .then((res) => {
        // console.log(res.data);
        // setDescription(description);
      })
      .catch((error) => {})
  );
  //   console.log(fav_text);

  return (
    <div className='wrapper'>
      <div className='left'>
        <img
          src={`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${id}.png?raw=true`}
          alt='user'
          width='100'
          height='100'
        />
        <h5>{pokemon?.name}</h5>
        <p>
          {pokemon?.types?.map((ab) => (
            <span
              key={ab.type.name}
              style={{ background: 'white', color: 'black', padding: '.5rem' }}
            >
              {ab.type.name.toUpperCase()}
            </span>
          ))}
        </p>
      </div>
      <div className='right'>
        <div className='info'>
          <p></p>
          <div className='info_data'>
            <div className='data'>
              <h4>Height</h4>
              <p>{pokemon?.height}</p>
            </div>
            <div className='data'>
              <h4>Species</h4>
              <p>{pokemon?.species?.name.toUpperCase()}</p>
            </div>
          </div>
        </div>

        <div className='projects'>
          <h3>Info</h3>
          <div className='projects_data'>
            {pokemon?.stats?.map((stat) => (
              <div className='data' key={stat.stat.name}>
                <h4>{stat.stat.name.toUpperCase()}</h4>
                <p>{stat.base_stat}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
