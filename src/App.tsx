import React from 'react';
import './App.css';
import {Header, Footer} from "./components";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Header title="Hello World">
                    <div>Some content</div>
                </Header>
            </header>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default App;
