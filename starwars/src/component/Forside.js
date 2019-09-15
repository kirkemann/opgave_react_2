import React from 'react'
import Starwars from '../Starwars'
import Starwarlogo from '../Star_Wars_Logo.svg'

const Forside  = () => {
    return (
        <div className="container center">
            <div className="col s12">
            <div class="row">
                <div class="col s6">
                    <h5>Her kan du se lidt om filmene</h5>
                    <a href="/Films" class="waves-effect yellow darken-3 waves-light btn-large "><i class="material-icons left">tv</i>Star Wars Film</a>
                </div>
                <div class="col s6">
                    <h5>Her er der lidt info om krigerne</h5>
                    <a href="/Starwars" class="waves-effect yellow darken-3 waves-light btn-large "><i class="material-icons left">android</i>Star Wars Kriger</a>
                </div>
                <div class="col s6">
                    <h5>Se infomation om nogen af Starships</h5>
                    <a href="/Starships" class="waves-effect yellow darken-3 waves-light btn-large "><i class="material-icons left">airplanemode_active</i>Star Wars Ship</a>
                </div>
                <div class="col s6">
                    <h5>Se info om nogen af planeterne</h5>
                    <a href="/planets" class="waves-effect yellow darken-3 waves-light btn-large "><i class="material-icons left">language</i>Star Wars Planets</a>
                </div>
                
            </div>
            </div>
            <img src={Starwarlogo} alt="starwars_logo"/>
        </div>
    )
}

export default Forside 