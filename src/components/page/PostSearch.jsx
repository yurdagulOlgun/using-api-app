import React from 'react';
import { useLocation, useNavigate, } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Card from '../base/Card';

function PostSearch() {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/`)
      .then((response) => response.json())
      .then((json) => {
        setData(json.results);
      });
  }, []);

  const urlParams = new URLSearchParams(location.search);
  const [q, setQ] = useState(urlParams.get('query'));

  function formSubmit(event, data, q) {
    event.preventDefault();
    setQ(event.target.q.value);
    navigate(`/search?query=${event.target.q.value}`);
  }

  return (
    <>
      <form onSubmit={formSubmit}>
        <div className="mb-3">
          <label htmlFor="search" className="form-label mt-5">
          <strong className='text-success'>Search Your Character's Full Name</strong>
          </label>
          <input
            name="q"
            type="text"
            className="form-control"
            id="search"
            defaultValue={q}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Search
        </button>
        <button type="reset" className="btn btn-danger m-2">
          Reset
        </button>
      </form>
      {location.pathname === '/search' ? (
        <>        
          {data
            .filter((data) => data.name.includes(q))
            .map((data) => (
              <div className='col-sm-4 mb-3'key={data.id} ><Card data={data}/></div>
              
            ))}
        </>
      ) : null}
    </>
  );
}

export default PostSearch;