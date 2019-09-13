import React, { Component } from 'react'
import axios from 'axios'

class Starwars extends Component {

    state = {
        people: []
    }
    componentDidMount() {
        axios.get('https://swapi.co/api/people/')
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
                    <div className="post card" key={people.id}>                       
                    <div className="card-content">
                        <h4>{people.name} </h4>
                        <h6>Height: {people.height}</h6>
                        <h6>Mass: {people.mass}</h6>
                        <h6>Hair color: {people.hair_color}</h6>
                        <h6>Skin color: {people.skin_color}</h6>
                    </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No people yet</div>
        )
        return (
            <div className="container">
                <h4 className="center">Starwars Hero´s</h4>
                {peopleList}
            </div>
        )
    }
}

export default Starwars


