import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_SINGLE_ARTIST } from '../utils/queries';

const artistContainerStyle= {
  height: "auto", 
  marginTop:'105px', 
  marginBottom:'5px', 
  border: '0.5px solid gray', 
  backgroundColor: '#F2F2F2',
};

const imageContainerStyle= {
  marginTop: '120px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '50vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '70%',
  position: 'relative',
  border: '4px solid',
};

const contactContainerStyle= {
  minHeight:'120px',
  width:'auto', 
  height: "auto", 
  marginTop:'135px', 
  marginBottom:'5px', 
  border: '0.5px solid gray', 
  backgroundColor: '#F2F2F2',
};


const ProfilePage = () => {
    const { artistId } = useParams();
  
    const { loading, error, data } = useQuery(QUERY_SINGLE_ARTIST, {
      variables: { artistId: artistId },
    });
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      console.error("Error loading artist:", error);
      return <div>Error loading artist</div>;
    }
  
    const artist = data?.artistById || {}; 
  

  return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div id= "artist" className="container" style={artistContainerStyle}>
              <h1 className='p-4'>Artist:{artist.name}</h1>
              <p className='m-3 text-start'><b>Location:</b> {artist.city}, {artist.state}</p>
              <p className='m-3 text-start'><b>Genre:</b> {artist.genre}</p>
              <p className='m-3 text-start'>About:{artist.description}</p>
          
            </div>
          </div>
  
          <div className="col-md-7">
            <div className="container" style={imageContainerStyle}>
              {/* <p>Images:</p> */}
              {/* {artist.images.map((image, index) => (
                <img key={index} src={image} alt={`Image ${index}`} />
              ))} */}
            </div>
          </div>
  
          <div className="col-md-2">
            <div className="container" style={contactContainerStyle}>
              <p style={{ margin: "10px"}}>Contact Info</p><br/>
              {/* <p>{$website}<br/>{$email}</p> */}
            </div>
          </div>
        </div>
      </div>
    );
  };


//   <div>
//     <p>Name: {artist.name}</p>
//     <p>Description: {artist.description}</p>
//     <p>City: {artist.city}</p>
//     <p>State: {artist.state}</p>
//     <p>Genre: {artist.genre}</p> {/* Access the 'genre' field */}
//     <p>Website: {artist.website}</p>
//     <p>Email: {artist.email}</p>
//     {/* Add more details as needed */}
//   </div>
    
  
  export default ProfilePage;