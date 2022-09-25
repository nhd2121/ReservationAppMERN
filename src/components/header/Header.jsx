import React from 'react'
import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faPlane, faCar, faTaxi, faLandmark } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div className='header'>
        <div className="headerContainer">
            <div className="headerLists">
                <div className="headerListsItem active">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </div>
                <div className="headerListsItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                </div>
                <div className="headerListsItem">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car rentals</span>
                </div>
                <div className="headerListsItem">
                    <FontAwesomeIcon icon={faLandmark} />
                    <span>Attractions</span>
                </div>
                <div className="headerListsItem">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport Taxis</span>
                </div>
            </div>
            <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
            <p className="headerDescription">
                Get rewarded for your travels - unlock instant savings of 10% or more with a free expressbooking account
            </p>
            <button className="headerBtn">Sign in / Register</button>
            <div className="headerSearch">
                
            </div>
        </div>
    </div>
  )
}

export default Header