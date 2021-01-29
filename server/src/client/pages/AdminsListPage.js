import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions';
import requireAuth from '../components/hocs/requireAuth';

class AdminsListPage extends Component {
    componentDidMount() {
        this.props.fetchAdmins();
    }

    renderAdmins() {
        return this.props.admins.map(admin => {
            return <li key={admin.id}>{admin.name}</li>
        });
    }

    render() {
        return (
            <div>
                <h3>Protected List of admins</h3>
                <ul>{this.renderAdmins()}</ul>
            </div>
        )
    }
}

function mapStateToProps( { admins }) {
    return { admins };
}

// function loadData(store) {
//     return store.dispatch(fetchUsers());
// }

// named export needs curly braces.
// export { loadData }; 

// export an object with the loadData function and the component
export default {
    // loadData,
    // pass AdminsListPage into HOC
    component: connect(mapStateToProps, { fetchAdmins })(requireAuth(AdminsListPage)),
    loadData: ({ dispatch }) => dispatch(fetchAdmins())
};