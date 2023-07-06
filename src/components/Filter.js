import React, { Component } from 'react'
import "./../App.css"


export class Filter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filter: [
                {
                    key: 'all',
                    name: 'Все'
                },
                {
                    key: 'Chinese',
                    name: 'Chinese'
                },
                {
                    key: 'English',
                    name: 'English'
                },
                {
                    key: 'Arabic',
                    name: 'Arabic'
                },
                {
                    key: 'Hindi',
                    name: 'Hindi'
                },
                {
                    key: 'Bengali',
                    name: 'Bengali'
                },
                {
                    key: 'Portuguese',
                    name: 'Portuguese'
                },
                {
                    key: 'Russian',
                    name: 'Russian'
                },
                {
                    key: 'Japanese',
                    name: 'Japanese'
                },
                {
                    key: 'Italian',
                    name: 'Italian'
                },
                {
                    key: 'French',
                    name: 'French'
                },
                {
                    key: 'Korean',
                    name: 'Korean'
                },
                {
                    key: 'German',
                    name: 'German'
                }

            ]
        }
    }

    render() {
        return (
            <div className='app-filter'>
                {this.state.filter.map(cart => (
                    <div id={cart.key} onClick={() => this.props.filterlanguage(cart.key)}>{cart.name}</div>
                ))}
            </div>
        )
    }
}

export default Filter