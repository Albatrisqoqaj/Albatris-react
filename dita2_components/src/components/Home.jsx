import React from 'react'
import Button from './Button';

function Home() {
    const x = 5;
    console.log("Value of X is:",x);
    const name = "Arianit";
    const arr = [1, 2, 3];
    const obj = {
        name: "Albatris",
        age: 15,
        city:"Prizren",
        country:"Kosova",
        skills: ["Javascript",]
    };
  return (
   <>
          <h1>Welcome to Dita</h1>
         {/* ky eshte nje koment */}
         <p>{ x }</p>
         <p>Hello, { name }!</p>
         <p>Array: { arr }</p>
         <p>{obj.skills.join(", ") }</p>
          <Button/>
   </>
  )
}

export default Home
