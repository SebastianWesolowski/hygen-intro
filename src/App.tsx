import React from 'react';
import './App.css';
import {Header} from "./components";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Header title="Hello World">
                    <div>Some content</div>
                </Header>
            </header>
        </div>
    );
}

export default App;
