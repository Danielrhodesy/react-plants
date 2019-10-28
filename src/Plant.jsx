import React, { Component } from 'react';
import Header from './Header.jsx'

class Plant extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="list-container">
                    <ul>
                        <li>Plant</li>
                        <li>Plant</li>
                        <li>Plant</li>
                        <li>Plant</li>
                    </ul>
                </div>

            </div>
        )
    }
}

export default Plant;