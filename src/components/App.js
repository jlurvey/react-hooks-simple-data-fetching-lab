import React, { useState, useEffect } from "react";
const URL = "https://dog.ceo/api/breeds/image/random"

function App() {
    const [image, setImage] = useState("")

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((resp) => resp.json())
            .then((data) => setImage(data.message)
            );
    }, [])


    if (!image) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <img src={image} alt="A Random Dog" />
        </div>
    );
}
export default App