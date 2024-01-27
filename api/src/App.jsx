import {useState,useEffect} from 'react'
import axios from 'axios'
import "./App.css"
const App = () => {
  let [data,setData]= useState([])

  useEffect(()=>{
      axios.get("https://reactnd-books-api.udacity.com/books",{ headers: { 'Authorization': 'whatever-you-want' }}).then(res=>{
        console.log(res)    
      setData(res.data.books)
      }).catch(error=>{
          if(error.response.status===404){
            console.log("Website not found")
        }
        console.log("Status Code:",error)
      })
  },[])

return (
  <>
      {data.map((el)=>(
          
          <div key={el.id} className='card'>
              
              <div>
              <h2>{el.title}</h2>
              <img src={el.imageLinks.thumbnail}/>

              </div>
              <h4 >{el.description}</h4  >
              <h3>{el.authors[0]}</h3>


          </div>
      ))}
  </>
  )
}

export default App