import { useQuery } from '@apollo/client';

// import ProfileList from '../components/ProfileList';

import { QUERY_GENRES_ARTISTS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_GENRES_ARTISTS);
  const artists = data?.artists || [];

  return (
    <main>
      <div className="flex-row justify-center">
       
        {/* <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ProfileList
              profiles={profiles}
              title="Here's the current roster of friends..."
            />
          )}
        </div> */}
      </div>
    </main>
  );
};

export default Home;