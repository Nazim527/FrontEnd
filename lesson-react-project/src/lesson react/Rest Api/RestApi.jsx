import React, { useEffect, useState } from "react";
import { getMuscle } from "./muscle";

const RestApi = () => {
  const [muscles, setMuscle] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true)
    const newData = await getMuscle(input);
    setMuscle(newData);

    setInput("");
    setLoading(false)
  };

  useEffect(() => {
    async function getCurrentM() {
      const getMuscles = await getMuscle();
      setMuscle(getMuscles);
      console.log(getMuscles);
      setLoading(false);
    }
    getCurrentM();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button>Search</button>
      </form>
      <div>
        {muscles.length == 0 && <h1>Axdardiginiz netice tapilmadi</h1>}
        {muscles.map((muscle) => {
          return (
            <>
              <h1>{muscle.name}</h1>
              <h2>{muscle.muscle}</h2>
              <p>{muscle.instructions}</p>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default RestApi;
