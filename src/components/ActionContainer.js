// importer les modules dont notre composant à besoin
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TimerForm from './TimerForm';
import Button from './Button';

// 2 - créer le composant
class ActionContainer extends Component{
    static propTypes = {
        onFormSubmit: PropTypes.func.isRequired
    }

    state = {
        isFormOpen: false
    }

    handleFormOpen = () => {
        this.setState({ isFormOpen : true });
    }

    handleFormClose = () => {
        this.setState({ isFormOpen : false });
    }

    onFormSubmit = ({ title, project }) => {
        this.handleFormClose();
        this.props.onFormSubmit({title, project});
    }

    render(){
        if(this.state.isFormOpen){
            return (
                <TimerForm 
                    onFormSubmit={this.props.onFormSubmit} 
                    onCloseForm={this.handleFormClose}
                />
            )
        }
        else{
            return <Button handleFormOpen={this.handleFormOpen}/>
        }
    }
}

// 3 exporter le composant
export default ActionContainer;