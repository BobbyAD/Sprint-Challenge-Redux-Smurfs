import React, { Component } from 'react';
import { connect } from "react-redux";

import { getSmurfs, addSmurf } from '../actions';
import Smurf from './Smurf';

import './App.css';


class App extends Component {
    state = {
        newSmurf: {
            name: '',
            age: '',
            height: ''
        }
    }
    componentDidMount() {
        this.props.getSmurfs();
    }

    addSmurf = event => {
        event.preventDefault();
        this.props.addSmurf(this.state.newSmurf);
        this.setState({
            newSmurf: {
                name: '',
                age: '',
                height: ''
            }
        })
    }

    handleChanges = e => {
        this.setState({
            newSmurf: {
                ...this.state.newSmurf,
                [e.target.name]: e.target.value
            }
        });
    };


    render() {
        return (
            <div className="App">
                <h1> Smurfs :) </h1>
                {this.props.smurfs &&
                    this.props.smurfs.map(smurf => {
                        return <Smurf smurf={smurf} key={smurf.id} />
                    })
                }
                <form onSubmit={this.addSmurf}>
                <input
                            type='text'
                            name='name'
                            value={this.state.newSmurf.name}
                            placeholder="Name"
                            onChange={this.handleChanges}
                        />
                        <input
                            type='text'
                            name='age'
                            value={this.state.newSmurf.age}
                            placeholder="Age"
                            onChange={this.handleChanges}
                        />
                        <input
                            type='text'
                            name='height'
                            value={this.state.newSmurf.height}
                            placeholder="Height"
                            onChange={this.handleChanges}
                        />
                        <input type='submit' value='Add a Smurf!' />
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(
    mapStateToProps,
    {
        getSmurfs,
        addSmurf
    })(App);
