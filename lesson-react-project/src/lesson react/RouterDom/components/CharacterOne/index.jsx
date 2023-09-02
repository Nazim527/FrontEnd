import React from "react";
import style from './style.module.css'
import { Link } from "react-router-dom";

const CharacterOnes = ({id,imageUrl,fullName,family}) => {
  return (  
    <Link to={`/characters/${id}`} className={style.CharacterOne}>
      <div className={style.characterImage}>
        <img src={imageUrl}/>
      </div>
      <h2>{fullName}</h2>
      <h3>{family}</h3>
    </Link>
  );
};

export default CharacterOnes;
