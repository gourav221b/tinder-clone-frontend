import React,{useState,useEffect} from 'react';
import TinderCard from "react-tinder-card";
import "./tindercards.css";
import axios from './axios';

function Tindercards() {
   const [People, setPeople] = useState([]);

   useEffect(() => {
      async function fetchData()
      {
          const req=await axios.get('/tinder/cards');

          setPeople(req.data);

      }

      fetchData();
   }, [])

   console.log(People);
const swiped = (direction,nameToDelete)=>{
    console.log("removing "+ nameToDelete)
};
const outOffFrame =(name)=>
{
    console.log(name+" has left the chat");
}

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
            {People.map((person)=>
            (
                <TinderCard
                 className="swipe"
                key={person.name}
                preventSwipe= {["up","down"]}                
                onSwipe={(dir)=>swiped(dir,person.name)}
                onCardLeftScreen={()=> outOffFrame(person.name)}
                 >
                    <div
                    style={{background: `url(${person.imgUrl}) rgba(0,0,0,0.3)`}}
                    className="card"     
                    >
                        <h3>{person.name}</h3>
                    </div>

                </TinderCard>

            ))}
            </div>
        </div>
    )
}

export default Tindercards
