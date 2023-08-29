import React from 'react'
import{useState, useEffect} from 'react';
import "./styles.css"


function Navbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShow(window.scrollY > 100);
    })
  
  }, [])
  

  return (
    <div className={`nav-wrapper ${show && "nav-container-black"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix logo"
        className = "netflixIcon"
      ></img>
      <ul className = "listCategories">
        <li><a href = "#Em alta">Em alta</a></li>
        <li><a href = "#Originais Netflix">Originais</a></li>
        <li><a href = "#Populares">Populares</a></li>
        <li><a href = "#Comédias">Comédias</a></li>
        <li><a href = "#Romances">Romances</a></li>
        <li><a href = "#Documentários">Documentários</a></li>
      </ul>
      <img
        src = "https://occ-0-876-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbV2URr-qEYOrESG0qnP2787XsIxWTMBh7QfJwyqYxMAVFNyiXAqFeu16gI8yTxg3kLwF2mUDKmZGfwBEDd7722xskhYwAMwsBBe.png?r=bd7"
        alt = "Avatar icon"
        className = "avatarIcon"
      ></img>
    </div>
  )
}

export default Navbar