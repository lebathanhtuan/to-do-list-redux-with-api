import React, { Component } from 'react';
import './../style.css';
import { connect } from "react-redux";
import * as actions from "./../actions/index"

class AddItem extends Component {
    constructor(){
        super();
        this.getNameItem = this.getNameItem.bind(this);
        this.onClickAddItem = this.onClickAddItem.bind(this);
        this.state = {
            name: ''
        }
    }
    getNameItem(e){
        var value = e.target.value;
        this.setState({
            name: value
        })
    }
    onClickAddItem(){
        this.props.addItem(this.state.name);
    }
    render() {
        return (
            <div className="form-inline" style={this.props.styleInputAdd}>
                <input 
                    type="text" 
                    className="form-control" 
                    name="nameItem"
                    onChange={this.getNameItem}
                />
                <button className="btn btn-outline-success ml-2" onClick={this.onClickAddItem}>Xác nhận</button>
                <button className="btn btn-outline-danger ml-2" onClick={this.props.onClickButtonCancel}>Hủy</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return{
        addItem: (value) => {
            dispatch(actions.addItem(value));
        }
    }
};

export default connect(null, mapDispatchToProps)(AddItem);
