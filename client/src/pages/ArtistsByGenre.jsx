import backgroundImage from '../../assets/background.jpg';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ARTISTS_BY_GENRE } from '../utils/queries';
import { Row, Col, Container, Card, Button } from 'react-bootstrap';

const ArtistsByGenre = () => {
  const { genreId } = useParams();

  const { loading, error, data } = useQuery(QUERY_ARTISTS_BY_GENRE, {
    variables: { genreId: genreId },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error('Error loading artists by genre:', error);
    return <div>Error loading artists by genre</div>;
  }

  const artistsByGenre = data?.artistsByGenre || [];

  // Style Attributes
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '70vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '120px',
    marginBottom: '120px',
    width: '70%',
    position: 'relative',
    border: '4px solid',
  };

  const genreContainerStyle = {
    height: 'auto',
    marginTop: '105px',
    marginBottom: '5px',
    border: '0.5px solid gray',
    borderRadius: '30px 30px 30px 30px',
    textColor: '#333333',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
    backgroundColor: '#F2F2F2',
  };

  const cardStyle = {
    height: '100%', 
  };

  const horizontalLineStyle = {
    border: '0',
    borderTop: '2px solid black',
    margin: '1px 0',
  };

  function handleProfile(artistId) {
    const profileUrl = `/profiles/${artistId}`;

    window.location.href = profileUrl;
  }


return (
  <>
    <Row>
      <Col md={3} className="welcome" style={genreContainerStyle}>
        <h3 style={{ marginTop: '10px' }}>{artistsByGenre[0].genre}</h3>
        <hr style={horizontalLineStyle} />
      </Col>
      <Col md={9}>
        <Container fluid style={containerStyle}>
          <Row className="justify-content-center opacity-75" style={{ marginTop: '20%' }}>
            {artistsByGenre.map(artist => (
              <Col key={artist._id} md={6} className="mb-4">
                <Card style={cardStyle}>
                  <Card.Img variant="top" url={artist.images[0]} alt={artist.name} />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{artist.name}</Card.Title>
                    <Button
                      className='btn-block btn-info'
                      onClick={() => handleProfile(artist._id)}>
                      View Profile
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Col>
    </Row>
  </>
);
};

export default ArtistsByGenre;