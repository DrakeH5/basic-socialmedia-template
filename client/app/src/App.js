import React, { useEffect, useState } from "react"
import ImageFeed from "./imageFeed.js"

function App() {

  const [backendData, setBackendData] = useState([{}])
  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])


  return (
    <div>
      <center>
        {/* {(typeof backendData.users === 'undefined') ? (
          <p>Loading...</p>
        ): (
          backendData.users.map((user,i) => (
            <p key={i}>{user}</p>
          ))
        )}
        {(typeof backendData.names === 'undefined') ? (
          <p>Loading...</p>
        ): (
          backendData.names.map((name,i) => (
            <p key={i}>{name}</p>
          ))
        )} */}
        <form method="POST" action="/upload" encType="multipart/form-data" target="_blank">
          <input type="file" name="image"></input>
          <input type="submit"></input>
        </form>
 
        <ImageFeed />
      </center>
    </div>
  );
}

export default App;
