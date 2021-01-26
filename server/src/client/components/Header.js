import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ auth }) => {
    console.log('My auth status is', auth);

    // <a is for entire browser to change the address - fully qualified address
    const authButton = auth ? (
        <a href="/api/logout">Logout</a>
    ) : (
        <a href="/api/auth/google">Login</a>
    );

    // Link are for the browser to navigate inside React app
    return (
        <div>
            <Link to="/">React SSR</Link>
            <div>
                <Link to="/users">Users</Link>
                <Link to="/admins">Admins</Link>
                {authButton}
            </div>
        </div>
    );
};

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);