import React, { Component } from 'react'
import axios from 'axios'
import Starwarlogo from '../spaceship.png'

class Starships extends Component {

    state = {
        people: []
    }
    componentDidMount() {
        axios.get('https://swapi.co/api/starships/')
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
                    <div className="ship post card" key={people.id}> 
                        <img src={Starwarlogo} alt="Starwars Logo"/>                      
                    <div className="card-content">
                        <h4>{people.name} </h4>
                        <h6>Model: {people.model}</h6>
                        <h6>Manufacturer: {people.manufacturer}</h6>
                        <h6>Cost in credits: {people.cost_in_credits}</h6>
                        <h6>Length: {people.length}</h6>
                    </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No people yet</div>
        )
        return (
            <div className="container home skib">
                <h2 className="center"><img src={Starwarlogo} alt="Starwars Logo"/></h2>
                {peopleList}
            </div>
        )
    }
}

export default Starships


