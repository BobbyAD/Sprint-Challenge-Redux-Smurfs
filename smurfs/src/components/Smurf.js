import React, { Component } from 'react'

export default class Smurf extends Component {
    render() {
        return (
            <div className='smurf' key={this.props.smurf.id}>
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
                    <form>
                        <input type='text' placeholder={this.props.smurf.name} />
                        <input type='text' placeholder={this.props.smurf.age} />
                        <input type='text' placeholder={this.props.smurf.height} />
                        <input type='submit' value='Update' />
                    </form>
                </div>
            </div>
        )
    }
}
