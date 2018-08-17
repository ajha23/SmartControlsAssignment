import React, { Component } from 'react'
import axios from 'axios'
import DisplayRepo from './DisplayRepo';

export default class Search extends Component {
    state = {
        query: '',
        results: []
    }


    handleSubmit = (event) => {
        event.preventDefault();
        axios.get(`https://api.github.com/users/${this.state.query}/repos`)
            .then(({ data }) => {
                this.setState({
                    results: [...data]
                })
            })
    }


    handleInputChange = () => {
        this.setState({
            query: this.search.value
        })

    }



    render() {

        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <div className='center'>
                        <div className='row'>
                            <div className='col-25'>
                                <label>
                                    Search:
                    </label>
                            </div>
                            <div className='col-75'>
                                <input
                                    placeholder="Search for..."
                                    className='center'
                                    ref={input => this.search = input}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                        </div>
                        <div className='row'>
                            <input type="submit" value="Submit" />
                        </div>
                    </div>
                </form>
                <DisplayRepo results={this.state.results} />
            </React.Fragment>
        )
    }
}
