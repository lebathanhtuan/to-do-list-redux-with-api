import React, { Component } from 'react';
import './../style.css';
import { connect } from "react-redux";
import * as actions from "./../actions/index"

class ListItem extends Component {
    constructor(props){
        super(props);
        this.onClickButtonEdit = this.onClickButtonEdit.bind(this);
        this.onClickButtonCancel = this.onClickButtonCancel.bind(this);
        this.getNameItem = this.getNameItem.bind(this);
        this.onClickDeleteItem = this.onClickDeleteItem.bind(this);
        this.onClickEditItem = this.onClickEditItem.bind(this);
        this.state = {
            displayDefault: 'inline-block',
            displayEdit: 'none',
            name: this.props.listItem
        }
    }

    displayDefault(){
        return({
            display: this.state.displayDefault
        })
    }

    displayEdit(){
        return({
            display: this.state.displayEdit
        })
    }

    onClickButtonEdit(){
        this.setState({
            displayDefault: 'none',
            displayEdit: 'inline-block'
        })
    }

    onClickButtonSave(){
        this.setState({
            displayDefault: 'inline-block',
            displayEdit: 'none'
        })
    }

    onClickButtonCancel(){
        this.setState({
            displayDefault: 'inline-block',
            displayEdit: 'none'
        })
    }

    onClickDeleteItem(){
        this.props.deleteItem(this.props.idItem);
    }

    onClickEditItem(){
        this.props.editItem(this.props.idItem, this.state.name)
        this.onClickButtonSave()
    }

    getNameItem(e){
        var value = e.target.value;
        this.setState({
            name: value
        })
    }

    render() {
        return (
            <tr>
                <td>{this.props.indexItem+1}</td>
                <td>
                    <h6 style={this.displayDefault()}>{this.props.listItem}</h6>
                    <input 
                        type="text" 
                        className="form-control"
                        name="nameItemEdit"
                        value={this.state.name}
                        style={this.displayEdit()}
                        onChange={this.getNameItem}
                    />
                </td>
                <td className="text-right">
                    <button 
                        className="btn btn-outline-success mr-2"
                        style={this.displayDefault()} 
                        onClick={this.onClickButtonEdit}
                    >
                        Sửa
                    </button>
                    <button 
                        className="btn btn-outline-success mr-2" 
                        style={this.displayEdit()}
                        onClick={this.onClickEditItem}
                    >
                        Lưu
                    </button>
                    <button 
                        className="btn btn-outline-danger mr-2" 
                        style={this.displayEdit()} 
                        onClick={this.onClickButtonCancel}
                    >
                        Hủy
                    </button>
                    <button 
                        className="btn btn-outline-danger" 
                        onClick={this.onClickDeleteItem}
                    >
                        Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return{
        deleteItem: (id) => {
            dispatch(actions.deleteItem(id));
        },
        editItem: (id, value) => {
            dispatch(actions.editItem(id, value));
        }
    }
};

export default connect(null, mapDispatchToProps)(ListItem);
