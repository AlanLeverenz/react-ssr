import React, { Component } from 'react';
import { connect } from 'react-redux';
// will send the user to another place in the app
import { Redirect } from 'react-router-dom';

export default (ChildComponent) => {
    class RequireAuth extends Component {
        render() {
            switch (this.props.auth ) {
                // redirects user to home if not authenticated
                case false:
                    return <Redirect to="/" />;

                // still figuring out what to do
                case null:
                    return <div>Loading...</div>
                
                // forward props through to the child component
                default: 
                    return <ChildComponent {...this.props} />;

            }
        }
    }

    // checks to see if user is authenticated
    function mapStateToProps({ auth }) {
        return { auth };
    }

    // connect helper wraps the component just created
    // export final wrapped version of the component
    return connect(mapStateToProps)(RequireAuth);

}