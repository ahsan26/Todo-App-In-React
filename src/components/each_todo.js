import React, { Component } from 'react';
export default class Todo extends Component {
    constructor() {
        super();
        this.state = {
            edit: false
        }
    }
    edit() {
        this.setState({ edit: true });
    }
    save() {
        this.setState({ edit: false });
        this.props.update(this.props.i, this.refs.updated_todo_txt.value);
    }
    remove() {
        this.props.del(this.props.i);
    }
    renderNoraml() {
        return (
            <div className="todo_container">
                <p className="todo_txt">{this.props.children}</p>
                <button className="btn edit" onClick={this.edit.bind(this)}>Edit</button>
                <button className="btn remove" onClick={this.remove.bind(this)}>Remove</button>
            </div>
        );
    }
    renderForm() {
        return (
            <div className="todo_container">
                <input type="text" defaultValue={this.props.children} ref="updated_todo_txt" />
                <button className="btn save" onClick={this.save.bind(this)}>Save</button>
            </div>
        );
    }
    render() {
        if (this.state.edit) {
            return this.renderForm();
        } else {
            return this.renderNoraml();
        }
    }
}