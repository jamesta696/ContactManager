import React, { Component } from "react";
import Contacts from "./components/Contacts";
import { Provider } from "./context";

import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
    render() {
        return (
            <Provider>
                <div className="App">
                    <Header branding="Contact Manager" />
                    <div className="container">
                        <Contacts />
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
