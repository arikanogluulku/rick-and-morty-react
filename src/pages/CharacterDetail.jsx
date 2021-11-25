import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CharacterDetailItem from '../components/characters/CharacterDetailItem';
import CharacterService from '../services/CharacterService';

function CharacterDetail() {
  const [char, setChar] = useState('');
  const { charId } = useParams();
  const characterService = new CharacterService();

  useEffect(() => {
    characterService.getCharacterById(charId)
      .then((res) => res.data)
      .then((data) => setChar(data))
      .catch((err) => err);
  }, [charId]);

  const genderIcon = () => (char.gender === 'Male' ? (<i className="fa fa-male" />) : ((<i className="fa fa-female" />)));
  const statusIcon = () => {
    if (char.status === 'Alive') return (<i className="fa fa-smile-o" />);
    if (char.status === 'Dead') return (<i className="fa fa-frown-o" />);
    return (<i className="fa fa-question" />);
  };
  const speciesIcon = () => (char.species === 'Alien' ? (<i className="fa fa-reddit-alien" />) : (<i className="fa fa-users" />));

  return (
    <div className="character__container">
      <div className="character__image">
        <img src={char.image} alt={char.name} />
      </div>
      <table className="character__table">
        <CharacterDetailItem title="Name" value={char.name} />
        <CharacterDetailItem title="Gender" icon={genderIcon()} value={char.gender} />
        <CharacterDetailItem title="Status" icon={statusIcon()} value={char.status} />
        <CharacterDetailItem title="Species" icon={speciesIcon()} value={char.species} />
      </table>
    </div>
  );
}

export default CharacterDetail;
