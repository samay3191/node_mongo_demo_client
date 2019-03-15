import React, { Component } from 'react';
import { getAllUsers, deleteUser } from '../apiCalls/apiServiceCalls';

export default class ShowUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    showAllUsers = async () => {
        const response = await getAllUsers();
        this.setState({ users: response });
    }

    deleteThisUser = async (userId) => {
        const response = await deleteUser({ _id: userId });
        if (response) {
            await this.showAllUsers();
        }
    }

    render() {
        const allUsers = this.state.users;
        return (
            <React.Fragment>
                <hr />
                <div className="row">
                    <div className="col-md-10">
                        <h4>Users List <small>{allUsers.length} Users available</small></h4>
                    </div>
                    <div className="col-md-2">
                        <button
                            className="btn btn-default"
                            onClick={this.showAllUsers}
                        >Get All Users</button>
                    </div>
                </div>
                <div class="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allUsers &&
                                allUsers.map(user =>
                                    <tr>
                                        <td>{user._id}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <button type="button" class="btn btn-default">
                                                <span class="glyphicon glyphicon-edit"></span>
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                type="button"
                                                class="btn btn-default"
                                                onClick={() => this.deleteThisUser(user._id)}
                                            >
                                                <span class="glyphicon glyphicon-trash"></span>
                                            </button>
                                        </td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        );
    }
}