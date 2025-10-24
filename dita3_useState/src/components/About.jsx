import React, {useState} from 'react'

function About() {
    const [vlera, setVlera] = useState(0);
    const [name, setName] = useState("Albatris");
    const [arr, setArr] = useState([1, 2, 3, 4, 5]);
    const obj = {
      name: "Albatris",
      age: 15,
      city: "Prizren",
    };
  
    const [allName, setAllName] = useState([
      { id: 1, name: "Albatris", age: 15, city: "Prizren" },
      { id: 2, name: "Albatris", age: 15, city: "Prizren" },
      { id: 3, name: "Albatris", age: 15, city: "Prizren" },
      { id: 4, name: "Albatris", age: 15, city: "Prizren" },
      { id: 5, name: "Albatris", age: 15, city: "Prizren" },
      { id: 6, name: "Albatris", age: 15, city: "Prizren" },
    ]);
  
  return (

    <>
    <h1>About us</h1>


      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {allName.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );


  
 



   


}

export default About
