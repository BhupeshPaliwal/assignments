import React, { Component } from "react";
import {Provider} from 'mobx-react';
import rootStore from './mobx/rootStore';
import Tree from "./views/Tree";
import "./App.css";

class App extends Component {
    render() {
        return (
            <Provider rootStore={rootStore}>
                    <Tree />
            </Provider>    
        );
    }
}

export default App;
