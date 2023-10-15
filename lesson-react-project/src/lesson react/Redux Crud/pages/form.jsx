import React from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux'
import Form from "react-bootstrap/Form";
import { addNewuser } from "../store/reducers/user";

const TableFrom = () => {
  const {userData: ReduxUser} = useSelector((state) => state.user)
  
  const navigation = useNavigate();
  const dispatch = useDispatch()
  const [userData, setUserData] = React.useState({
    name: "",
    email: "",
    status: ""
  })

  const handleChange = (e) => {
    setUserData((prev) => {
        return {
            ...prev,
            [e.target.name]: e.target.value
        }
    })
  }

  const handleNavigateBack = () => {
    navigation(-1); //! Yazmaqla biz bir onceki sehifemize qayidiriq oldugumuz yuerden
  };


  const handleSubmit = (e) => {
    e.preventDefault()

    const newUser = {
        id: ReduxUser.length+1,
        ...userData
    }
    dispatch(addNewuser(newUser))
    navigation('/')
  }
  return (
    <>
      <div onClick={handleNavigateBack} style={{ cursor: "pointer" }}>
        Go Back
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Enter Name" onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Status</Form.Label>
          <Form.Control name="status" type="text" placeholder="Status" onChange={handleChange}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default TableFrom;
