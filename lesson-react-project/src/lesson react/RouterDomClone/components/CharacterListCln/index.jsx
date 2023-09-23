import React from 'react'
import CharacterOneClone from '../CharacterOneClone'
import { getCharactersClone } from '../../api/character'
import './style.css'

const CharatcterListClone = () => {
    const [characters, setCharacter] = React.useState([])

    React.useEffect(()=>{
        async function fetchCaracterOne() {
            const data = await getCharactersClone()

            setCharacter(data)
        }

        fetchCaracterOne()
    },[])


  return (
    <div className="character_list">
        {characters.map((character)=> {
            console.log(character);

            return (
                <CharacterOneClone 
                key={character.id}
                image={character.imageUrl}
                fullName={character.fullName}
                family={character.family}/>
            )
        })}
    </div>
  )
}

export default CharatcterListClone