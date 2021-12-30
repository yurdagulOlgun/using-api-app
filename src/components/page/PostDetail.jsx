import React from 'react';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
function PostDetail(props) {

  const params = useParams();
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${params.postId}`)
      .then(response => response.json())
      .then(json => { setData(json) })
  }, [params.postId])
  console.log(params.postId);
  console.log(data)
  return <>
    <div className="container">
      <div className="row">
        <div className="col-sm-4 offset-3">
          <div className="card mt-2 ">
            <div className="card-body">
              <h1 className="mt-2 "> <strong>Name:</strong> {data.name}</h1>
              <hr />
              <p className="card-subtitle mb-2 ">
                <strong>Status: </strong>
                {data.status}
              </p>
              <p className="card-title">
                <strong>Species:</strong> {data.species}
              </p>
              <p className="card-text">
                <strong>Gender: </strong>
                {data.gender}
              </p>
              <img src={`${data.image}`} alt="" className='w-100' />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
}
export default PostDetail;
