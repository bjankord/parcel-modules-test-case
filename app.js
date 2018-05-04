import React, { Component } from "react";
import Button from "test-react-ui-button";
import styles from "./app.scss";

class App extends Component {
    render() {
        return <div className={styles.foo}><Button text="Hello from React!" variant="emphasis" /></div>;
    }
}
export default App;
