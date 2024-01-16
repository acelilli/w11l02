import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/actions";
import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";

const SearchJob = () => {
  //1. Associamo dispatch
  const dispatch = useDispatch();
  //2. Leggo lo stato attuale
  const data = useSelector((state) => state.data);
  const isLoading = useSelector((state) => state.isLoading);
  const error = useSelector((state) => state.error);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  //3. Logica condizionale:
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }
  //definisco handleChange?
  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  // nel return mappo le risposte della API
  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={fetchData}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {Array.isArray(jobs) && jobs.length > 0 ? (
            jobs.map((jobData, index) => <Job key={jobData._id} data={jobData} />)
          ) : (
            <p>No jobs available</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default SearchJob;
