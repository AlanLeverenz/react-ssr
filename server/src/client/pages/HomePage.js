import React from 'react';

const Home = () => { 
    return (
        <div>
            <div>I'm the VERY BEST home component</div>
            <button onClick={() => console.log('Hi there!')}>Press me!</button>
        </div>
    )
}

// export a component object to contain its own loadData function
export default { 
    component: Home 
};
