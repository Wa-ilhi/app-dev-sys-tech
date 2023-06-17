import axios from "axios";
import React, { useState } from "react";
import { FormGroup, Input, Button, Row, Col } from 'reactstrap';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

//Registration field for the new user
const initialUser =  ({email:"", password:"", username:""}); // ask user to enter their credentials.
const Registration = () =>{
    const [user,setUser] = useState (initialUser);
    const navigate = useNavigate();

    const signup = async() => {
        try{
            const url = `http://localhost:1337/api/auth/local/register`; //use strapi localhost to fetch data.
            if (user.username && user.email && user.password) {
                const res = await axios.post(url, user);  //send a request to the server
                if(res) {
                    setUser(initialUser);
                    navigate("/login");
                }
                console.log(res);
            }
        } catch (error) {
            toast.error(error.message, {
                hideProgressBar: true,    // handles error.
              });
        }
    };
    const handleUserChange = ({target}) => {
        const {name, value} = target;
        setUser((currentUser) => ({
    ...currentUser,
    [name]: value,
        }));
    };

    return <div>
    <Row className="register">
    <Col sm='15' md={{ size: 4, offset: 4 }}>
        <h5>Signup</h5>
        <FormGroup>
            <Input
              type="text"
              name="username"
              value={user.username}
              onChange={handleUserChange}
              placeholder="Enter your Name"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="email"
              name="email"
              value={user.email}
              onChange={handleUserChange}
              placeholder="Enter your Email"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              name="password"
              value={user.identifier}
              onChange={handleUserChange}
              placeholder="Enter your Password"
            />
          </FormGroup>
          <Button color = 'primary' onClick={signup}>Register</Button>
          </Col>
        </Row>
    </div>
};

export default Registration;
