import { Link } from 'react-router-dom';

const ProfileList = ({ artists, name }) => {
  if (!artists.length) {
    return <h3>No Artists Yet</h3>;
  }

  return (
    <div>
      <h3 className="text-primary">{name}</h3>
      <div className="flex-row justify-space-between my-4">
        {artists &&
          artists.map((artists) => (
            <div key={artists._id} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {artists.name} <br />
                  </h4>

                <Link
                  className="btn btn-block btn-squared btn-light text-dark"
                  to={`/artists/${artists._id}`}
                >
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProfileList;
