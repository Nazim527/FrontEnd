import React from 'react'
import image from '../../../../../../Projeler/Proje 3/Img/logo.png'
import './style.css'

const CharacterOneClone = ({image,fullName,family}) => {
  return (
    <div className='characterOne'>
        <div className="image"> 
            <img src={image} alt=""/>
        </div>
        <h2>{fullName}</h2>
        <h3>{family}</h3>
    </div>
  )
}

export default CharacterOneClone