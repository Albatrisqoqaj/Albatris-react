import React, {useState} from 'react'
import BlogLists from 'BlogLists';


function Home() {

   const [list, setList] = React.useState([
    {id:1, name:"ali", age:"20", city:"istanbul"},
    {id:2, name:"veli", age:"25", city:"ankara"},
    {id:3, name:"deli", age:"30", city:"izmir"},
    {id:4, name:"beli", age:"35", city:"bursa"},
   ])

   const deleteButton = (id) =>{
    const newList = list.filter(list => list.id != id);

    setList(newList)

    }
     
      const view = (id) =>{
      const newList2 = list.filter(list => list.id ==id);
      setList(newList2)


   }

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
 
    </>
  )
}

export default Home
