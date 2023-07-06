import React, { Component } from 'react'
import "./App.css"
import Filter from './components/Filter'
import axios from 'axios'
import Flags from './components/Flags'


export class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item: []

        };
        this.filterlanguage = this.filterlanguage.bind(this)

    }

    componentDidMount() {
        let selected_element = document.getElementById("all");
        selected_element.classList.add('selected_lang')

        axios.get('https://restcountries.com/v3.1/all?fields=name,flags,capital,maps')
            .then((response) => {
                this.setState({
                    item: response.data
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        return (
            <div className='app'>
                <Filter filterlanguage={this.filterlanguage} />
                <Flags item={this.state.item} />
            </div>
        )
    }

    filterlanguage(languages) {
        let past_element = document.getElementsByClassName('selected_lang')
        past_element[0].classList.remove('selected_lang')

        let selected_element = document.getElementById(languages)
        selected_element.classList.add('selected_lang')

        if (languages === 'all') {
            axios.get('https://restcountries.com/v3.1/all?fields=name,flags,capital,maps')
                .then((response) => {
                    this.setState({
                        item: response.data
                    })
                })
                .catch((err) => {
                    console.log(err)
                })
            return
        }

        axios.get(`https://restcountries.com/v3.1/lang/${languages}?fields=name,flags,capital,maps`)
            .then((response) => {
                this.setState({
                    item: response.data
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export default App