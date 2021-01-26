import React from 'react';

const Home = () => { 
    return (
        <div className="center-align" style={{ marginTop: '200px' }}>
            <h3>Welcome</h3>
            <p>Check out these awesome features</p>
        </div>
    )
}

// export a component object to contain its own loadData function
export default { 
    component: Home 
};
