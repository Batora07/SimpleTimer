// importer les modules dont notre composant à besoin
import React, {Component} from 'react';
import uuid from 'uuid';
import ActionContainer from './ActionContainer';
import ListContainer from './ListContainer';

// 2 - créer le composant
class Box extends Component{

    state = {
        timers: [ 
            {
                title: "Apprendre React",
                project: "Développement Web",
                elapsed: "5609628",
                id: "01",
                runningSince: null
            },
            {
                title: "Apprendre Angular",
                project: "Développement Web",
                elapsed: "1349620",
                id: "02",
                runningSince: null
            }
        ]
    }

    handleEditTimer = ({id, title, project}) =>{
        this.setState({
            timers: this.state.timers.map(timer =>{
                if(timer.id === id){
                    return{
                        ...timer,
                        title,
                        project
                    }
                }
                return { ...timer }
            })
        })
    }

    handleCreateTimer = ({title, project}) => {
        const timer= {
            title,
            project,
            id: uuid.v4(),
            elapsed: 0,
            runningSince: null
        }
        this.setState({
            timers: [...this.state.timers, timer]
        });
    }

    handleDelete = id =>{
        this.setState({
            timers: this.state.timers.filter(timer => timer.id !== id)
        });
    }

    handlePlay = id => {
        console.log("play")
        const now = Date.now();
        this.setState({
            timers: this.state.timers.map(timer => {
                if(timer.id === id){
                    return{
                        ...timer,
                        runningSince: now
                    }
                }
                else{
                    return { ...timer }
                }
            })
        });
    }

    handlePause = id => {
        console.log("pause");
        const now = Date.now();
        this.setState({
            timers: this.state.timers.map(timer => {
                if(id === timer.id){
                    const nextElapsed = now - timer.runningSince;
                    return{
                        ...timer,
                        runningSince: null,
                        elapsed: timer.elapsed + nextElapsed
                    }
                }
                else{
                    return { ...timer }
                }
            })
        });
    }

    render(){
        return (
            <div className="boxed--view">
                <div className="boxed--view__box">
                    <ListContainer 
                        onFormSubmit={this.handleEditTimer} 
                        onDelete={this.handleDelete}
                        timers={this.state.timers} 
                        onPlay={this.handlePlay}
                        onPause={this.handlePause}
                    />
                    <ActionContainer onFormSubmit={this.handleCreateTimer}/>
                </div>
            </div> 
        )
    }
}

// 3 exporter le composant
export default Box;