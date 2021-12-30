import React from 'react';
import PostSearch from './PostSearch';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
function Home(props) {
  return (
    <>
      <h1 className='text-center text-dark mt-3'>Welcome to <strong className='text-danger'>Rick and Morty</strong>'s Universe!</h1>
      <Container>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <img src="https://i.pinimg.com/564x/66/22/c2/6622c2701653a4fafdcc26da6fc60291.jpg" alt="" className='w-50' />
            <PostSearch />
          </Col>
        </Row>        
      </Container>
    </>
  );
}
export default Home;