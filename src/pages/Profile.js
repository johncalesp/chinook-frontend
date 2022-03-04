import React, { useState } from 'react';
import { useUserContext } from '../context/user_context';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import { Loading } from '../components';

const Profile = () => {
  const { user, updateUser } = useUserContext();
  const [person, setPerson] = useState(user);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    updateUser(person);
    setLoading(false);
  };
  return (
    <>
      <Wrapper>
        {loading ? (
          <Loading />
        ) : (
          <div className="container">
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-item">
                  <TextField
                    required
                    id="standard-basic"
                    label="First Name"
                    variant="standard"
                    name="firstName"
                    sx={{ width: '100%' }}
                    defaultValue={user.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-item">
                  <TextField
                    required
                    id="standard-basic"
                    label="Last Name"
                    variant="standard"
                    name="lastName"
                    sx={{ width: '100%' }}
                    defaultValue={user.lastName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-item">
                  <TextField
                    id="standard-basic"
                    label="Company"
                    variant="standard"
                    name="company"
                    sx={{ width: '100%' }}
                    defaultValue={user.company}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-item">
                  <TextField
                    required
                    id="standard-basic"
                    label="Phone"
                    variant="standard"
                    name="phone"
                    sx={{ width: '100%' }}
                    defaultValue={user.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-item">
                  <TextField
                    required
                    id="standard-basic"
                    label="Address"
                    variant="standard"
                    name="address"
                    sx={{ width: '100%' }}
                    defaultValue={user.address}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-item">
                  <TextField
                    required
                    id="standard-basic"
                    label="City"
                    variant="standard"
                    name="city"
                    sx={{ width: '100%' }}
                    defaultValue={user.city}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <button type="submit" className="btn">
                Update
              </button>
            </form>
          </div>
        )}
      </Wrapper>
      ;
    </>
  );
};

const Wrapper = styled.section`
  .container {
    max-width: 1100px;
    margin-top: 2rem;
    margin-left: auto;
    margin-right: auto;
    padding: 0.25rem;
  }
  .form-grid {
    margin-top: 4rem;
    margin-bottom: 2rem;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
  }
  .form-item {
    margin: 0.5rem;
  }
  @media (min-width: 400px) {
    .form-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export default Profile;
