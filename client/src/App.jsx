import './App.css';
import React, { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom'
import Gifts from './pages/Gifts'
import GiftDetails from './pages/GiftDetails'
import PageNotFound from './pages/PageNotFound'
import { Link } from 'react-router-dom'


import CreateGift from './pages/CreateGift'
import EditGift from './pages/EditGift'



const App = () => {
  
  const [gifts, setGifts] = useState([]);


  useEffect(() => {

    fetchGifts()
    

  }, []);


  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<Gifts data={gifts}/>
    },
    {
      path:"/gift/:id",
      element: <GiftDetails data={gifts} />
    },
    {
      path:"/*",
      element: <PageNotFound />
    }
  ]);

  
  return ( 

    <div className="App">

      <header>
        <div className="header-container">
          <div className="header-left">
            <img src="/logo.png"/>
            <h1>UnEarthed</h1>
          </div>
          <div className="header-right">
            <Link to="/"><button className="homeBtn">Home</button></Link>
            <Route path="/gift/:id" element={<GiftDetails data={gifts} />} />
            <Route path="/new" element={<CreateGift />} />
            <Route path="/*" element={<PageNotFound />} />
          </div>
        </div>
      </header>

        {element}
        
    </div>

  );
}

const fetchGifts = async () => {


  const response = await fetch('/gifts')
  const data = await response.json()
  setGifts(json)


}








export default App;