import React, { Component } from 'react'
import "./../App.css"

export class Flags extends Component {
    render() {
        return (
            <div className='container'>
                {this.props.item.map(cart => (
                    <div className='card'>
                        <a href={cart.maps.googleMaps} target='_blank'>
                            <div className='app-card'>
                                <img src={cart.flags.png} className='app-img' alt="флаг" />
                                <div className='app-title'>
                                    <p>{cart.name.official}</p>
                                    <p>{cart.capital}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        )
    }
}

export default Flags