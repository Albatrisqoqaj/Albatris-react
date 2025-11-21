
import {useState, useEffect} from 'react'


function usefetch(url) {
 
    
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [list, setList] = useState([]);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
        const [deleteButton, setDeletebutton] = useState()
        const [view, setView] = 

          useEffect( () => {
                setTimeout(()=> {
                fetch(url)

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
            }, 1000);
            }, )

          const deleteButton = (id) =>{
    
            const newList = list.filter(list => list.id != id);
              setList(newList) 
          }

          const view = (id) =>{
            const newList2 = list.filter(list => list.id ==id);
            setList(newList2)
          }    

  return {

    list,
    loading,
    error

  }
   

}

export default usefetch
