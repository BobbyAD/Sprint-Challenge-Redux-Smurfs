import React, { Component } from 'react';
import { connect } from "react-redux";

import { getSmurfs, deleteSmurfs, updateSmurf, addSmurf } from '../actions';
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

    render() {
        return (
            <div className="App">
                <h1> Smurfs :) </h1>
                {this.props.smurfs &&
                    this.props.smurfs.map(smurf => {
                        <Smurf smurf={smurf} />
                    })
                }
                <form>
                    <input type='text' placeholder='Name' />
                    <input type='text' placeholder='Age' />
                    <input type='text' placeholder='Height' />
                    <input type='submit' value='Add a Smurf' />
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
        deleteSmurfs,
        updateSmurf,
        addSmurf
    })(App);
