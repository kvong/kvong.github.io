import React from 'react';
import axios from 'axios';
import {HashRouter as Router, Link, Switch, Route} from 'react-router-dom';
import capitalizeName from './format';

export default class Pokepage extends React.Component{
    state = {
        name: '',
        pokeIndex: '',
        imageUrl: '',

    }

    async componentDidMount(){
        const pokeIndex = this.props.match.params.pokeIndex; 
        const pokeUrl = "https://pokeapi.co/api/v2/pokemon/" + pokeIndex + '/';
        const speciesUrl = "https://pokeapi.co/api/v2/pokemon-species/" + pokeIndex + '/';

        const res = await axios.get(pokeUrl);
        const name = capitalizeName(res.data.name);
        const type = res.data.types
        
        // Get type
        console.log(res.data.types[0].type.name);
        console.log(res.data.types[1].type.name);

        this.setState({name: name});
    }

    render(){
        return (
            <div>
                {this.state.name}! I choose you!
                
            </div>
        );
    }
    
}
