import React, { Component } from 'react';
import { addNewUser, updateExistingUser } from '../apiCalls/apiServiceCalls';

const initialState = {
    userName: "",
    userEmail: "",
    userId: ""
};

export default class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    resetState = () => {
        this.setState(initialState);
    }

    createUserObject = () => {
        const { userName, userEmail } = this.state;
        return {
            username: userName,
            useremail: userEmail
        };
    }

    addUser = async (e) => {
        e.preventDefault();
        debugger;
        const userObj = this.createUserObject();
        debugger;
        const response = await addNewUser(userObj);
        debugger;
        if (response) {
            this.resetState();
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value });
    }

    render() {
        return (
            <React.Fragment>
                <hr />
                <h4>Add New User</h4>
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <form className="form">
                            <div className="form-group">
                                <label htmlFor="txtUserName">UserName</label>
                                <input
                                    className="form-control"
                                    name="userName"
                                    id="txtUserName"
                                    type="text"
                                    placeholder="Enter UserName"
                                    value={this.state.userName}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtUserEmail">UserName</label>
                                <input
                                    className="form-control"
                                    name="userEmail"
                                    id="txtUserEmail"
                                    type="email"
                                    placeholder="Enter UserName"
                                    value={this.state.userEmail}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <button
                                type="submit"
                                class="btn btn-default"
                                onClick={this.addUser}
                            >
                                Save User
                            </button>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}