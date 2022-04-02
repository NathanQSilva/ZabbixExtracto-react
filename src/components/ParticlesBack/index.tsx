import { Particle } from 'jparticles';
import React from 'react';

class ParticlesBack extends React.Component {
    conponentDidMount() {
        new Particle('#demo')
    }

    render() {
        return (
            <div id='demo'></div>
        )
    }
}

export default ParticlesBack