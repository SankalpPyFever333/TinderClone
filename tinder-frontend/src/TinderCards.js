import React, { useEffect, useState } from 'react'
import "./TinderCards.css";
import TinderCard from 'react-tinder-card';
import axios from "./axios";

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(()=>{
    async function fetchData(){
      // getting data by making a get request to the server.
      const req = await axios.get("/tinder/cards");
      setPeople(req.data)
    }
    fetchData();
  },[])

  // useeffect hook will run only once here when the component gets rendered bcoz dependency array is empty.

  // Suppose, in array you have given a variable [count] , whenever this variable changes, it will run that peice code again.



    const swiped = (direction, nameToDelete)=>{
      console.log("Removing:"+nameToDelete);
    }

    const outOfFrame = (name)=>{
      console.log(name+"Left the screen");
    }



  return (
    <div className='tinderCards'>
      <div className="tinderCards_cardContainer">
      {people.map((p)=>{
        // return <h3>{p.name}</h3>
        // we have to use return statement in order to render this element on the screen. If you do not return it, it will not show up to the screen.
        return <TinderCard 
        className='swipe'
        key={p.name}
        preventSwipe={["up","down"]}
        onSwipe={(dir)=> swiped(dir, p.name)}
        onCardLeftScreen={()=>outOfFrame(p.name)}
        >
          <div 
          style={{backgroundImage: `url(${p.imgUrl})`}}
          className='cards'
          >
          <h3>{p.name}</h3>
          </div>
        </TinderCard>
      })}
      

      </div>
      
    </div>
  )
}

export default TinderCards

