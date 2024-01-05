import React from 'react';
import ReactDOM from 'react-dom/client';

const heading=React.createElement("div",{id:"heading"},[
React.createElement("div",{id:"child1"},[
    React.createElement("h1",{},"h1 heading"),
    React.createElement("h1",{},"h2 heading")
]),
React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"h1 heading"),
        React.createElement("h1",{},"h2 heading")
    ])
])

 const root=ReactDOM.createRoot(document.getElementById("root"))

 root.render(heading)



//  >From now onwards we will not write the big commands for building our Project,instead we  will use npm run start or npm start for dev build and for
//  production build we will use npm run build as we have made the changes in script in package.json.

