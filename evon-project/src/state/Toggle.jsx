import React, {useState} from 'react';

const Toggle = () => {
    const [stateDemo, setStateDemo] = useState(false);
    console.log(stateDemo)
    return (
        <div id={'toggle'}>
            <h1>Toggle is - {stateDemo ? 'true' : 'false'}</h1>
            <button onClick={() => setStateDemo(!stateDemo)}>OnClick</button>
        </div>
    );
};

export default Toggle;