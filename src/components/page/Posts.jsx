import React from 'react';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table'
function Posts(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const URL = 'https://rickandmortyapi.com/api/character';
      fetch(URL, { mode: 'cors' })
        .then((response) => response.json())
        .then((json) => {
          setData(json.results)
          setLoading(false)
        })
    }, 0)
  }, []);
  
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1 className='mt-5 text-success'>Rick and Morty Character List</h1>
      <Table striped bordered hover size="sm" >
<thead >
  <tr>
    <th>name</th>
    <th>status</th>
    <th>species</th>
    <th>gender</th>
  </tr>
</thead>
<tbody >
{data.map((item) => (
  <tr>    
    <td><Link to={`${item.id}`} style={{ textDecoration: "none", color: "black" }} > {item.name}</Link></td>
    <td><Link to={`${item.id}`} style={{ textDecoration: "none", color: "black" }} > {item.status}</Link></td>
    <td><Link to={`${item.id}`} style={{ textDecoration: "none", color: "black" }} > {item.species}</Link></td>
    <td><Link to={`${item.id}`} style={{ textDecoration: "none", color: "black" }} > {item.gender}</Link></td>
    
  </tr>
  ))}
</tbody>
</Table> 
    </>
  );
}
export default Posts;
