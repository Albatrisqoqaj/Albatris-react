import React, {useEffect, useState} from 'react'
import BlogLists from 'BlogLists';


function Home() {


   const [list, setList] = React.useState([]);

   const deleteButton = (id) =>{
    const newList = list.filter(list => list.id != id);

    const [error, setError] = (id) => {
      
    }

    setList(newList)
   }
    }
     
      const view = (id) =>{
      const newList2 = list.filter(list => list.id ==id);
      setList(newList2)
       

   }

    {
       useEffect( () => {
        fetch('http://localhost:4000/list')
        .then( (res) =>{
          return res.json()
       })

        .then( (data)=> {
          setList(data)
          console.log(data)
        })
        .catch( (err) =>{
          setError(err.message)
        })
    }, [])





  return (
    <>
        <h1>Home Page </h1>
       {/*list.map(item => (
          <div key={item.id}>
          <h2>{item.name} </h2>
          <p>  {item.age} </p>
          <p> {item.city} </p>
          <hr />
        </div>
        )) */}

      <BlogLists list={list} title="Lista e nxeneseve" deleteButton={deleteButton} view={view} />
 
      <P>{ error }</P>

    </>
  )
}

export default Home
