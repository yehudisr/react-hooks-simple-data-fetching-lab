// create your App component here
import React, { useState, useEffect } from "react"

function App(){

    const [image, setImage] = useState(null)

    useEffect(()=> {

        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => setImage(data.message))

    },[])

    if (!image) return <p>Loading...</p>
    return(
        <div>
        <img src={image} alt="A Random Dog"/>
        </div>
    )
}
export default App