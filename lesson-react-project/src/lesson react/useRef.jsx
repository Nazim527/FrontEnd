import React from 'react'

const UseRef = () => {
  //!Eger inputlari her birin ayrica bir state de yoxda bir state icinde yazmaq ucun asagidaki mentiqi gura bilerik
  //? const [user, setUser] = React.useState({
  //?   name: "", //! Diqqett burda yazdigim Keyler inputun nameleriyle eyni adda olmalidir yoxsa object defualt davranaraq yeni bir key,value olusdurur
  //?   email: ""
  //? })


  //* Bu usul ile sadece bir fonksiyon yazmagla butun inputlarin deyerin goture bilerik
  //? const handleChange = (e) => {
  //?   const {name, value} = e.target
  //?   setUser((prevUser) => {
  //?     return {
  //?       ...prevUser,
  //?       [name]: value
  //?     }
  //?   })
  //? }


  //! Ve hazirda gorunduyu kimi yuxaridaki emeliyyatlari etdikde bizim sehife her input deyisdikce (re-render) olur ve bu bir qeder bizim ucun yaxsi deyil
  //! Bunun qarsisin almaq ucun (UseRef)-hook undan isdifade edilir ve bu isdifade bize iki usdunluk verir sehifemiz (re-render) olmur ve (dom) sece bilirik
  const name = React.useRef()
  const email = React.useRef()

  const handleName = (e) => {
    name.current = e.target.value
    console.log(name);
  }

  const handleEmail = () => {

  }

  console.log("render tekrarinin yoxlanmasi");

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  //! DOM - a bir numune
  React.useEffect(() => {
    name.current.focus()
  },[])

  return (
    <>
      <form onSubmit={handleSubmit}>
         <input type="text" name="name" ref={name} onChange={handleName}/> {/*//! Ref - onun Domun goturmek ucun */}
        <input type="text" name="email" ref={email} onChange={handleEmail}/>
        <button>Submit</button>
      </form>

      {/*//! User name ve email gosdermek ucun */}
      {/* <div>
        <span>name: {user.name}</span>
        <span>Email: {user.email}</span>
      </div> */}
    </>
  );
}

export default UseRef