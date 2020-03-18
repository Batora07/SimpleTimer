//importer les modules dont on a besoin
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// créer le composant
class Item extends Component{
    static propTypes = {
            nom: PropTypes.string.isRequired,
            age: PropTypes.string.isRequired,
            rouge: PropTypes.bool,
            job: PropTypes.bool
        }
    
    render(){
        return (
            <div>
                <p>{this.props.nom} a {this.props.age} ans !</p>
                {this.props.rouge ? (
                    <p>Il est rouge</p>
                ) : (
                    <p>Il n'est pas rouge</p>
                )
                }
            </div>
        )
    }
}
// exporter le composant
export default Item;