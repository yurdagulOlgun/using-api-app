import React from 'react';
import Card from 'react-bootstrap/Card'
function About(props) {
  return (
    <>
      <h1 className='text-success mt-3'>About Project</h1>
      <Card style={{ width: '18rem' }} className='m-3'>
        <Card.Body>
          <Card.Title>Project</Card.Title>
          <Card.Text>
            The purpose of this project is to pull data from the API and use this data on the page we designed.<br />
            <strong>To be used;</strong> <br />
            bootstrap, react, state, props, useEffect, useState, fetch, react-router-dom, react-bootstrap
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }} className='m-3'>
        <Card.Body>
          <Card.Title>API</Card.Title>
          <Card.Text>
            The document link of the API used is below.  <br />
            <a href='https://rickandmortyapi.com/documentation/#introduction'>API </a>
            <br />
            There is no authentication in the API.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
export default About;
