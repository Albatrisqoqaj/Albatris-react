import React, {useEffect, useState} from 'react'
import BlogLists from './BlogLists';


function Home() {


    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const deleteButton = (id) =>{
    
    
    const newList = list.filter(list => list.id != id);
      setList(newList) 
    }

    const view = (id) =>{
      const newList2 = list.filter(list => list.id ==id);
      setList(newList2)
    }    
      useEffect( () => {
        fetch('http://localhost:400/list')
        .then( (res) =>{
          return res.json()
       })

        .then( (data)=> {
          setLoading(false);
          setList(data)
          console.log(data)
        })
        .catch( (err) =>{
          setLoading(false);
          setError(err.message)
        })
    }, [])

  return (
    <>
        <h1>Home Page </h1>

        
   
      { list && <BlogLists list={list} title="Lista e nxeneseve" deleteButton={deleteButton} view={view}  error={error} /> }
 
      { loading && <div>Loading...</div> }

       { error && <p>{ error }</p> }


    </>
  )
}
export default Home
