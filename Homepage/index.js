import React from 'react';
import { userData } from '../../help';
import { Col, NavLink, Button, Nav, NavbarText, Navbar, NavbarBrand, NavbarToggler, NavItem, Collapse } from 'reactstrap';
import MealLists from './MealLists';
import RecipeIndex from './RecipeIndex';
import { useEffect } from 'react';
import { useState } from 'react';


const Home = () => {
  const { username } = userData();
  const [url, setUrl] = useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=a");
  const [item, setItem] = useState();
  const [show, setShow] = useState(false);
  const [search,setSearch]=useState();

  useEffect(() => {
    fetch(url).then(res => res.json()).then(data => {
      console.log(data.meals);
      setItem(data.meals);
      setShow(true);

    })
  }, [url])

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
