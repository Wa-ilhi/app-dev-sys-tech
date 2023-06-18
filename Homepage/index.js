import React from 'react';
import { userData } from '../../help';
import { Col, NavLink, Button, Nav, NavbarText, Navbar, NavbarBrand, NavbarToggler, NavItem, Collapse } from 'reactstrap';
import MealLists from './MealLists';
import RecipeIndex from './RecipeIndex';
import { useEffect } from 'react';
import { useState } from 'react';



const Home = () => {
  const { username } = userData(); // Fetching the username from the userData helper function
  const [url, setUrl] = useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=a"); // Setting the initial URL for fetching data
  const [item, setItem] = useState(); // State to store the fetched meal data
  const [show, setShow] = useState(false); // State to control the visibility of meal lists
  const [search,setSearch]=useState(); // State to store the value of the search input field

  useEffect(() => {
    // Fetching meal data from the API when the URL changes
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data.meals);
        setItem(data.meals); // Updating the meal data state
        setShow(true); // Showing the meal lists
      });
  }, [url]);

  const searchRecipe=(evt)=>{
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
}

   const setIndex = (inorderlists) => {
    setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${inorderlists}`)
  }



  return (
    <div>
      <Navbar color="primary" dark expand="md">
        <NavbarBrand href="/">
          <h4>Welcome to FoodBites, <span style={{ color: "#000000" }}>{username}</span></h4>
        </NavbarBrand>
        <Collapse navbar></Collapse>
        <NavbarText>
          <Nav className="ml-auto" navbar>
            <NavItem>
            <h6 color='primary'><NavLink href="/logout">Logout</NavLink></h6>
            </NavItem>
          </Nav>
        </NavbarText>
      </Navbar>

      <div className="main">
        <div className="heading">
          <h3>Be the chef in your own kitchen!</h3>
     
        </div>

        <div className="search-bar">         
        <input type="search" className="search-bar" onChange={e=> setSearch(e.target.value)} onKeyPress={searchRecipe}
          placeholder='Enter Food Name '/>
        </div>
        <div className='container'>
          {
            show ? <MealLists data={item} /> : "Not found"
          }
        </div>
        <div className="indexContainer">
          <RecipeIndex inorderlistsIndex={(inorderlists) => setIndex(inorderlists)} />
        </div>
      </div>
    </div>
  );
};


export default Home;
