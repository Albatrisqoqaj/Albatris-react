import BlogLists from './BlogLists';
import usefetch from './usefetch';


function Home() {

   const{
    list,
    loading,
    error,

   }=usefetch('http://localhost:3000/list')


   
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

        
   
      { list && <BlogLists list={list} title="Lista e nxeneseve" deleteButton={deleteButton} view={view}  error={error} /> }
 
      { loading && <div>Loading...</div> }

       { error && <p>{ error }</p> }


    </>
  )
}
export default Home
