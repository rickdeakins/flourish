import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_SINGLE_ARTIST } from '../utils/queries';



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
                <div className="col-md-4">
                  <div id= "artist" className="container">
                    <h1 className='p-4'>{artist.name}</h1>
                    <p className='m-3 text-start'>{artist.description}</p>
                    <p className='m-3 text-start'><b>Location:</b> {artist.city}, {artist.state}</p>
                    <p className='m-3 text-start'><b>Genre:</b> {artist.genre}</p>
              
               
                  </div>
                </div>
        
                <div className="col-md-4">
                  <div className="container">
                    <p>Images</p>
                  </div>
                </div>
        
                <div className="col-md-4">
                  <div className="container">
                    <p>Contact Info</p>
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