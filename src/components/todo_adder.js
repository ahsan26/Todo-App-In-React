import React, { Component } from 'react';
export default class Todo_Add extends Component {
    addTodo = () => {
        if (this.refs.new_todo.value) {
            this.props.add(this.refs.new_todo.value);
            this.refs.new_todo.value = "";
        }
    }
    render() {
        return (
            <div id="new_todo_container">
                <form action="JavaScript:void(0)" onSubmit={this.addTodo}>
                    <input type="text" ref="new_todo" />
                    <button className="btn " type="submit">Add</button>
                </form>
            </div>
        );
    }
}