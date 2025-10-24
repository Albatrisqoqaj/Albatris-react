import React from 'react'
import { useState } from 'react'

function Home() {

  const[vlera, setVlera] = useState(0);
  const[name, setName] = useState("Albatris");
  const[arr, setArr] = useState([1,2,3,4,5]);
  const obj = {
    name: "Albatris",
    age: 15,
    city: "Prizren",

  };

  const [allName  ,  setAllName] = useState([
    {id:1, name: "Albatris", age: 15, city: "Prizren"},
    {id:2, name: "Albatris", age: 15, city: "Prizren"},
    {id:3, name: "Albatris", age: 15, city: "Prizren"},
    {id:4, name: "Albatris", age: 15, city: "Prizren"},
    {id:5, name: "Albatris", age: 15, city: "Prizren"},
    {id:6, name: "Albatris", age: 15, city: "Prizren"},
  ]);

  return (
    <>
       <h1>Home Page</h1>
       <h2>{setVlera}</h2>
       <p>{ name }</p>
       <p>{ arr }</p>
       <p>{ obj.name  } - { obj.age } - { obj.city }</p>
       {allName.map( (item) => (
        <div key={item.id}>
          <h2>{vlera}</h2>
      <p>{name}</p>
      <p>{arr}</p>
      <p>{obj.name} - {obj.age} - {obj.city}</p>

        </div>
       ) )}


    </>
  )
}

export default Home
