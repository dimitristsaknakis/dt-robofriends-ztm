import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
    // // Test out the ErrorBoundary component which encloses CardList (in App)
    // if (true) {
    //     throw new Error("NoOooOOoOOO!");
    // }

    return (
        <>
            {
                // loop through robots to create Card components; using 'map()'
                // the key prop is so that React can keep track of its array elements
                robots.map((user, i) => {
                    return ( // parenthesis when returning on multiple lines
                        <Card 
                            key={user.id}
                            id={user.id}
                            name={user.name}
                            email={user.email}
                        />
                    );
                })
            }
        </>
    );
};

export default CardList;