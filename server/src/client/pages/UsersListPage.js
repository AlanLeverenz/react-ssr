import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import { Helmet } from 'react-helmet';

class UsersList extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>
        });
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Users App</title>
                    <meta property="og:title" content="Users App" />
                </Helmet>
                Here's a big list of users:
                <ul>{this.renderUsers()}</ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {users: state.users };
}

function loadData(store) {
    return store.dispatch(fetchUsers());
}

// named export needs curly braces.
// export { loadData }; 

// export an object with the loadData function and the component
export default {
    loadData,
    component: connect(mapStateToProps, { fetchUsers })(UsersList)
};