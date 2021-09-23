import React from "react";
import Card from "../modules/card";


class CardHolder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
            taskList: [{taskName: 'Brush Teeth', isDone: false}, {taskName: 'Brush Teeth', isDone: false},]

        }
        
    }

    addTask = () => {
        let newTaskList= [...this.state.taskList];
        newTaskList.push({taskName: 'Brush Teeth', isDone: true});
        this.setState({taskList: newTaskList});
    }

    changeName = (index) => () => {
        let newTaskList= [...this.state.taskList];
        newTaskList[index].taskName = 'Nemo';
        this.setState({taskList: newTaskList});
    }

    render() {
        return (
            <div className = 'container'>
            <div className = 'card'>
            {this.state.taskList.map((task, index) => {
                return(
                    <div>
                    <Card taskName={task.taskName} isDone={task.isDone}/>
                    <button onClick={this.changeName(index)}> change name </button>
                    </div>
                    
                )
            })}
            </div>
            <button onClick={this.addTask}> add task </button>
        </div>
        )
        
    }
}

export default CardHolder