import React, { useState, useEffect } from "react";
import axios from "axios";
import Photo from "./Photo";
export default function PhotoDiv() {
  const [photo, setPhoto] = useState([])

  useEffect(() => {
    let date = prompt("What Date's picture would you like to see? Format: YYYY-MM-DD")

    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=Indu3rhgC49dzykombgJUqiIt2BuGCUk8KrWsfj0&date=${date}`)
      .then(response => {
        console.log(response);
        setPhoto(response.data)
      })
      .catch(error => console.log(error, "@PhotoApiCall"))
  }, []);

  return (
    <>
      <Photo photo={photo} />
    </>
  )
}

