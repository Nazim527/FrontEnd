import React from "react";
import { useParams } from "react-router-dom";
import { getSingleChar } from "../../api/characters";

const CharacterDetail = () => {
  const {id} = useParams(); //! Mene sadece oldugum sehifenin dinamik olaraq id sini verir
  const [singleChar, setSingleChar] = React.useState({})

  console.log(singleChar);

  React.useEffect(() =>{
    async function fecthSingleChar() {
        const char = await getSingleChar(id)

        setSingleChar(char)
    }

    fecthSingleChar()
  },[id])

  return (
    <>
      <div>
        <img src={singleChar.imageUrl} />
      </div>
      <h2>{singleChar.fullName}</h2>
      <h3>{singleChar.family}</h3>
    </>
  );
};

export default CharacterDetail;
