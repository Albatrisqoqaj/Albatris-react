import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className="divHomeContainer">
       <div>
        <img src="reactrouterdom.jpg" alt="reactrouterdom" />
        <h1>Welcome to the Home Page</h1>
         <p>This is the main landing page of our React Router application.</p>
         
       </div>

         <div>
       <img src="reactrouterlogo.jpg" alt="reactrouterlogo" />
        <h2>About React Router</h2>
         <p>React Router is a standard library for routing in React. It enables navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
         
         </div>
            
          <div>
         <img src="reactrouterusage.jpg" alt="reactrouterusage" />
         <h2>Usage of React Router</h2>
         <p>React Router is used to create single-page web applications with navigation without the page refreshing as the user navigates.
         It allows for dynamic routing, nested routes, and route parameters.</p>

          </div>



    </div>
  )
}

export default Home
