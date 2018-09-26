import React, { Component } from 'react';
import './../style.css';
import ListItem from './ListItem';
import { connect } from "react-redux";
import * as actions from "./../actions/index"

class ListToDo extends Component {
    constructor(){
        super();
        this.onChangeFilter = this.onChangeFilter.bind(this);
        this.state = {
            filter: ''
        }
    }

    onChangeFilter(e){
        var value = e.target.value;
        this.setState({
            filter: value
        });
        setTimeout(()=>{
            this.props.filterItem(this.state.filter);
        });
        
    }

    render() {
        var {listToDo, filter} = this.props;
        if(filter){
            listToDo = listToDo.filter(list => {
                return list.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
            });
        }
        var showList = listToDo.map((list, index) => {
            return (
                <ListItem 
                    key={index} 
                    indexItem={index} 
                    idItem={list.id}
                    listItem={list.name} 
                />
            )
        });
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th colSpan="3">
                            <input 
                                type="text" 
                                className="form-control"
                                onChange={this.onChangeFilter}
                                placeholder="Filter"
                            />
                        </th>
                    </tr>
                    <tr>
                        <th>STT</th>
                        <th>To-do</th>
                        <th className="text-right action">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {showList}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        listToDo: state.listToDo,
        filter: state.filter
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return{
        filterItem: (value) => {
            dispatch(actions.filterItem(value));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ListToDo);
