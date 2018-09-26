import React, { Component } from 'react';
import './../style.css';
import AddItem from './AddItem';

class AddContent extends Component {
    constructor(props){
        super(props);
        this.onClickButtonAdd = this.onClickButtonAdd.bind(this);
        this.onClickButtonCancel = this.onClickButtonCancel.bind(this);
        this.state = {
            displayButtonAdd: 'block',
            displayInputAdd: 'none'
        }
    }
    onClickButtonAdd(){
        this.setState({
            displayButtonAdd: 'none',
            displayInputAdd: 'block'
        })
    }
    onClickButtonCancel(){
        this.setState({
            displayButtonAdd: 'block',
            displayInputAdd: 'none'
        })
    }
    displayButtonAdd(){
        return({
            display: this.state.displayButtonAdd
        });
    }
    displayInputAdd(){
        return({
            display: this.state.displayInputAdd
        });
    }
    render() {
        return (
            <div className="mt-4 mb-4">
                <button
                    className="btn btn-outline-success" 
                    style={this.displayButtonAdd()} 
                    onClick={this.onClickButtonAdd}
                >
                    Thêm
                </button>
                <AddItem 
                    styleInputAdd={this.displayInputAdd()} 
                    onClickButtonCancel={this.onClickButtonCancel} 
                />
            </div>
        );
    }
}

export default AddContent;
