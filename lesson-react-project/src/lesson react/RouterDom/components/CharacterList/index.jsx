import React from "react";
import style from "./style.module.css";
import { getCharacters } from "../../api/characters";
import { CharacterOnes } from "../../components";

const CharacterList = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    async function fecthCharacterList() {
      const charactersData = await getCharacters();
      setData(charactersData);
    }

    fecthCharacterList();
  }, []);
  return (
    <section className={style.Character_list}>
      {data.map((character) => {
        return (
          <CharacterOnes
            key={character.id}
            {...character} //! Bunu bir bir ad yazib props kimi oturmekdense destructing edib datani props kimi gondermek daha yaxsidi
          />
        );
      })}
    </section>
  );
};

export default CharacterList;
