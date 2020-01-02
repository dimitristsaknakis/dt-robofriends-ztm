import React from "react";
import "./Hello.module.css";

const Hello = (props) => {
    return(
        <div className="tc">
            <h1 className="f1">Hello world!</h1>
            {/* using the 'greeting' prop created/passed in 'index.js' */}
            <p className="f3">{props.greeting}</p>
        </div>
    );
}

export default Hello;