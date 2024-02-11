import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import { QUERY_SINGLE_ARTIST } from '../utils/queries';

const artistContainerStyle = {
  height: 'auto',
  marginTop: '105px',
  marginBottom: '5px',
  backgroundColor: '#F2F2F2',
  boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
  width: '100%',
  minHeight: '600px',
  borderRadius: '30px 30px 30px 30px'
};

const contactContainerStyle = {
  minHeight: '120px',
  width: 'auto',
  height: 'auto',
  marginTop: '100px',
  backgroundColor: '#F2F2F2',
  boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
  borderRadius: '30px 30px 30px 30px',
  bottom: '5px', 
  right: '100px',  
};

const imageContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '10px',
  paddingBottom: '10px',
  marginBottom: '20px',
  marginTop: '100px',
};

const imageDisplayStyle = {
  border: '3px solid'
};

const contactStyle = {
  margin: '10px', 
  padding: '10px',
}

const horizontalLineStyle = {
  border: '0',
    borderTop: '2px solid black',
    margin: '1px 0',
}

const ProfilePage = () => {
  const { artistId } = useParams();

  const { loading, error, data } = useQuery(QUERY_SINGLE_ARTIST, {
    variables: { artistId: artistId },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error('Error loading artist:', error);
    return <div>Error loading artist</div>;
  }

  const artist = data?.artistById || {};

  // Use slice to get the first four images
  const firstFourImages = artist.images.slice(0, 4);

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-md-3">
          <div className="container" style={artistContainerStyle}>
            <h3 className="p-4" style={{marginTop:'10px', marginBottom:'0'}}>{artist.name}</h3>
            <hr style={horizontalLineStyle} />
            <p className="m-3 text-start">
              <b>Location:</b> {artist.city}, {artist.state}
            </p>
            <p className="m-3 text-start">
              <b>Genre:</b> {artist.genre}
            </p>
            <p className="m-3 text-start">{artist.description}</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="container mt-5">
            {/* Map over the first two images and create image containers */}
            <div className="image-column mb-4" style={imageContainerStyle}>
              {firstFourImages.slice(0, 2).map((url, index) => (
                <img
                  key={index}
                  src={url}
                  className="img-fluid mb-3"
                  alt={`Image ${index + 1}`}
                  style={imageDisplayStyle}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="container mt-5">
            {/* Map over the next two images and create image containers */}
            <div className="image-column mb-4" style={imageContainerStyle}>
              {firstFourImages.slice(2, 4).map((url, index) => (
                <img
                  key={index}
                  src={url}
                  className="img-fluid mb-3"
                  alt={`Image ${index + 3}`}
                  style={imageDisplayStyle}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="container" style={contactContainerStyle}>
            <h3 style={contactStyle}>Contact:</h3>
            <hr style={horizontalLineStyle} />
            <a href={`mailto:${artist.email}`} >{artist.email}</a>
            <p>{artist.website}</p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;