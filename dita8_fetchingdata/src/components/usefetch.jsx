
import {useState, useEffect} from 'react'


function usefetch(url) {
 
    
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [list, setList] = useState([]);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);

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

  return {

    list,
    loading,
    error

  }
   

}

export default usefetch
