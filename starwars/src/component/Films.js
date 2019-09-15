import React, { Component } from 'react'
import axios from 'axios'
import Starwarlogo from '../Star_Wars_Logo.svg'

class Films extends Component {

    state = {
        people: []
    }
    componentDidMount() {
        axios.get('https://swapi.co/api/films/')
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
                        <h4>Title: {people.title} </h4>
                        <h6>Episode: {people.episode_id}</h6>
                        <h6>Opening Crawl: {people.opening_crawl}</h6>
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

export default Films


