import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';


const Signup = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  // handle sign-up button click
  const handleSignUpButtonClick = () => {
    // Implement your custom logic for sign-up button click here
    console.log('Sign Up button clicked');
  };

  return (
    <main className="flex-row justify-content-center mb-4">
      <div className="col-12">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2 text-center">Sign Up</h4>
          <div className="card-body d-flex justify-content-center align-items-center">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit} className="w-100">
            
                  <input
                    className="form-input w-100"
                    placeholder="Your email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
               
                
                  <input
                    className="form-input w-100"
                    placeholder="******"
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange}
                  />
              
                <div className="d-flex flex-column align-items-center mt-3">
                  <button
                    className="btn btn-block btn-info mb-3"
                    style={{ cursor: 'pointer' }}
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
  
            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
  
            }  

export default Signup;
