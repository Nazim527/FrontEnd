import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./Store/reducer/counterReducer";
import React from "react";
import { addProductToFavorites } from "./Store/reducer/FavoritesProduc";

const ReduxTool = () => {
  //! men indi Reducer icindeki yazdigim valueni burda gormek isdeyiremse bunu isdifade edmeliyem
  const { value } = useSelector((state) => state.counter); //! Ve burda esas reducerimizin icindeki olan reducerlere catiriq;

  const {favoritesProducts} = useSelector((state) => state.favorites)
  const [prod, setProd] = React.useState("")
  const dispatch = useDispatch() //! Dispacth bize isletmek isdediyimiz mentiqi getrimekde komek edir

  const handleIncrement = () => {
    dispatch(increment())
  }
  const handleDecrement = () => {
    dispatch(decrement())
  }

   const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(addProductToFavorites(prod)) //! Artiq biz parametr gondere bilriik
   }

  return (
    <>
      <h1>{value}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>

      <form onSubmit={handleSubmit}>
        <input type="text" 
        placeholder="Add Product"
        style={{margin: 20}}
        onChange={(e) => setProd(e.target.value)}/>
        <button>Add Products</button>
      </form>

      {favoritesProducts.map((product) => {
        return (
            <h1 key={Math.random() * 100}>{product}</h1>
        )
      })}
    </>
  );
};

export default ReduxTool;
