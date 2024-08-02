import React from 'react'
import searchIcon from '../images/MenuPngs/search.png'
import '../css/searchBox.css'

export default function SearchBox() {
  return (
    <div className="searchBox-container">
      <img src={searchIcon} alt="search-icon" className="search-icon" />
      <input type="text" placeholder="Search for food, coffe, etc..." name="query" className="search-box"/>
    </div>
  )
}
