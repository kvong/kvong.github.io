import React from 'react';
import {Link} from 'react-router-dom';
import capitalizeName from './format';


export default class Pokecard extends React.Component{
    state = {
        name: '',
        imageUrl: '',
        pokeIndex: ''
    };

    async componentDidMount(){
        const { name, url } = this.props;
        const capName = capitalizeName(name);
        const urlSplit = url.split('/');
        const pokeIndex = urlSplit[urlSplit.length - 2]
        const imageUrl = "https://pokeres.bastionbot.org/images/pokemon/" + pokeIndex + ".png"
        this.setState({name: capName, imageUrl: imageUrl, pokeIndex: pokeIndex})
    };

    render(){
        return (
            <div className='col-lg-3 col-md-4 col-sm-6 md-5'>
                <Link to={`pokemon/${this.state.pokeIndex}`}>
                    <img src={this.state.imageUrl} alt= {this.state.name} width="100em" height="100em"></img>
                    <br />
                    {this.state.name}
                </Link>
            </div>
        );
    }
}

