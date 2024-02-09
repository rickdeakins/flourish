import React from 'react';
import { useQuery } from '@apollo/client';
import ProfileList from '../components/ProfileList';
import { QUERY_PROFILES } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];

  return (
    <main>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 my-3">
            {loading ? (
              <div>Loading...</div>
            ) : (
              <ProfileList profiles={profiles} title="Artists" />
            )}
          </div>
        </div>
      </div>
      {/* Second Container */}
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 my-3">
            {/* Add your content for the second container here */}
          </div>
        </div>
      </div>
      {/* Third Container */}
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 my-3">
            {/* Add your content for the third container here */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
