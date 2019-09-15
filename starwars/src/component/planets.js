import React, { Component } from 'react'
import axios from 'axios'
import Starwarlogo from '../planets.png'

class Planets extends Component {

    state = {
        people: []
    }
    componentDidMount() {
        axios.get('https://swapi.co/api/planets/')
        .then(res => {
            console.log(res)
            this.setState({
                people: res.data.results.slice(0,5)
            })           
        })
    }
    render() {
        const { people } = this.state;
        const peopleList = people.length ? (
            people.map(people => {
                return(
                    <div className="planets post card" key={people.id}> 
                        <img src={Starwarlogo} alt="Starwars Logo"/>                      
                    <div className="card-content">
                        <h4>{people.name} </h4>
                        <h6>Rotation Period: {people.rotation_period}</h6>
                        <h6>Orbital Period: {people.orbital_period}</h6>
                        <h6>Diameter: {people.diameter}</h6>
                        <h6>Climate: {people.climate}</h6>
                    </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No people yet</div>
        )
        return (
            <div className="container home">
                <h2 className="center"><img src={Starwarlogo} alt="Starwars Logo"/></h2>
                {peopleList}
            </div>
        )
    }
}

export default Planets


