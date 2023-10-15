import Button from "react-bootstrap/Button";
import React from "react";
import { useNavigate } from "react-router-dom";
import Table from "../compomnents/table";

const Home = () => {
  const navigation = useNavigate();

  return (
    <>
      <Button variant="primary" onClick={() => navigation("/create")}>
        Add user
      </Button>
      <Table />
    </>
  );
};

export default Home;
