import './App.css';
import React from 'react';
import Clock from './Clock.js';
import TextDate from './TextDate.js';
import Calendar from './Calendar.js';

function App() {

    const [now, setNow] = React.useState(new Date());
    React.useEffect(function () {
        const intervalId = setInterval(function () {
            setNow(new Date());
        }, 1000);
        return function () { clearInterval(intervalId) };
    }, [now]);

    return (
        <div className="App">
            <Clock date={now} />
            <TextDate date={now} />
            <Calendar date={now} />
        </div>
    );
}

export default App;
