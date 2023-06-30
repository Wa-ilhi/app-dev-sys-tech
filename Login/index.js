import React, { useState, useRef } from 'react';
import { Container, FormGroup, Input, Button, Row, Col } from 'reactstrap';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { storeUser } from '../../help';
import { toast } from 'react-toastify';




const initialUser = { identifier: '', password: '' }; 

const Login = () => {
  const [user, setUser] = useState(initialUser); // sets the initial state  and update
  const navigate = useNavigate();         // programmatically navigate to other pages in the application.

// Define a function that updates the state of the `user` object
const handleChange = ({ target }) => {
  // Extract the `name` and `value` properties from the `target` object using object destructuring
  const { name, value } = target;

  // Update the state of the `user` object using the `setUser` function and the current state
  setUser((currentUser) => ({
    ...currentUser,   // Use the spread operator to create a shallow copy of the current user object
    [name]: value,     // Update the property specified by the `name` variable with the new `value`
  }));
};

const handleKeyPress = (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    handleLogin();
  }
};

// sends credentials of authenticated user 
  const handleLogin = async () => {
    try {
      const url = `http://localhost:1337/api/auth/local`; // use the strapi localhost address to fetch data
      if (user.identifier && user.password) {
        const { data } = await axios.post(url, user); //send an HTTP POST request to the URL 

        //create a storage for JWT
        //stores user credentials and navigates the user to the main application page.
        if (data.jwt) {
          toast.success("Logged in Successfully", {
            hideProgressBar: true,
          });
          storeUser(data);
          setUser(initialUser);
          navigate('/'); 
        }
        console.log({ data });    // shows data (e.g, jwt,user info)
      }
    } catch (error) {
      toast.error(error.message, {
        hideProgressBar: true,
      });
    }
  };

  return (
 

      <Row className='login'>       
        <Col sm='15' md={{ size: 4, offset: 4 }}> 
        <h4 span className="branding">*Welcome to FoodBites*</h4>  
          <FormGroup>
            <Input
              type='identifier'
              name='identifier'
              value={user.identifier}
              onChange={handleChange}
              placeholder='Enter Email'
            />
          </FormGroup>
          <FormGroup>
            <Input
              type='password'
              name='password'
              value={user.password}
              onKeyPress={handleKeyPress} 
              onChange={handleChange}
              placeholder='Enter Password'
            />
          </FormGroup>         
          <FormGroup>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Button color='primary' onClick={handleLogin}> 
          Login
        </Button>
        <span style={{ marginLeft: '10px', marginRight: '10px' }}></span>
        <h7>
          <Button color ='primary' >
            <Link to ='/register'>Signup</Link>
            </Button>
          </h7>       
      </div>
          </FormGroup>
        </Col>
      </Row>


 
  );
};

export default Login;
