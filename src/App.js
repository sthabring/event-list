import React from 'react';
import eventData from './features/events/event-data.json';

console.log(eventData);

function App() {
    return (
        <div className="container mt-5">
            <h2>Events</h2>

            <div className="alert alert-warning">
                Todo: create event teaser
            </div>

            <pre><code>{JSON.stringify(eventData, null, 2)}</code></pre>
        </div>
    );
}

export default App;
