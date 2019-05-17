import React, { Component } from 'react'
import { connect } from 'react-redux';

import { deleteSmurf, updateSmurf } from '../actions';

class Smurf extends Component {
    state = {
        updateSmurf: {
            name: '',
            age: '',
            height: '',
            id: this.props.smurf.id
        }
    }

    deleteSmurf = () => {
        this.props.deleteSmurf(this.props.smurf.id);
    }

    updateSmurf = event => {
        event.preventDefault();
        this.props.updateSmurf(this.state.updateSmurf, this.props.smurf.id);
        this.setState({
            updateSmurf: {
                name: '',
                age: '',
                height: ''
            }
        })
    }

    handleChanges = e => {
        this.setState({
            updateSmurf: {
                ...this.state.updateSmurf,
                [e.target.name]: e.target.value
            }
        });
    };

    render() {
        return (
            <div className='smurf'>
                <button className='delete' onClick={this.deleteSmurf}>Delete</button>
                <div className='details'>
                    <h3>{this.props.smurf.name}</h3>
                    <div className="age">
                        <strong>Age: </strong><p>{this.props.smurf.age}</p>
                    </div>
                    <div className="height">
                        <strong>Height: </strong><p>{this.props.smurf.height}</p>
                    </div>
                </div>
                <div className='update'>
                    <form onSubmit={this.updateSmurf}>
                        <input
                            type='text'
                            name='name'
                            placeholder={this.props.smurf.name}
                            value={this.state.updateSmurf.name}
                            onChange={this.handleChanges}
                        />
                        <input
                            type='text'
                            name='age'
                            placeholder={this.props.smurf.age}
                            value={this.state.updateSmurf.age}
                            onChange={this.handleChanges}
                        />
                        <input
                            type='text'
                            name='height'
                            placeholder={this.props.smurf.height}
                            value={this.state.updateSmurf.height}
                            onChange={this.handleChanges}
                        />
                        <input type='submit' value='Update' />
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
    }
}

export default connect(
    mapStateToProps,
    {
        deleteSmurf,
        updateSmurf
    })(Smurf);
