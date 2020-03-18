// importer les modules dont notre composant à besoin
import React, {Component} from 'react';

// 2 - créer le composant
class Button extends Component{
    render(){
        return (
            <button onClick={this.props.handleFormOpen} className="button__outline">
                +
            </button> 
        )
    }
}

// 3 exporter le composant
export default Button;