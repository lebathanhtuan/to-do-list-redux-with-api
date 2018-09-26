import React, { Component } from 'react';
import './style.css';
import ListToDo from './AppComponents/ListToDo';
import AddContent from './AppComponents/AddContent';

class App extends Component {
    render() {
        return (
            <div className="container mt-4">
                <h3>To-Do List</h3>
                <AddContent addItem={this.addItem}/>
                <div className="container-showlist">
                    <ListToDo/>
                </div>
            </div>
        );
    }
}

export default App;
