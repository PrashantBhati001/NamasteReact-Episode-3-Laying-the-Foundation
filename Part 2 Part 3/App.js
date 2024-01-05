import React from 'react';
import ReactDOM from 'react-dom/client';


//  >From now onwards we will not write the big commands for building our Project,instead we  will use npm run start or npm start for dev build and for
//  production build we will use npm run build as we have made the changes in script in package.json.

// >JSX  and React are different,JSX is not part of React
// >Please note that JSX is not HTML inside Javascript,html like syntax(very important)

const jsxheading=<h1>My name is Prashant</h1>   //this is JSX
// const heading=React.createElement("h1",{id:"heading"},"My name is Prashant")
// console.log(heading);
// console.log(jsxheading);

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(jsxheading)

// >Here both jsxheading and heading are same objects like we saw earlier.

// >The question is that is this(const jsxheading=<h1>My name is Prashant</h1>) a valid javascript?
// The answer is no,JS engine does not understand this nor even browsers.If you write this code on the browser it will give an
// error.So the question is how is it working.Parcel is playing the game here,before it goes to JS engine ,it gets transpiled to something 
// what JS engine and browsers can understand.More accurately Babel  is performing this task.


// Babel is a javascript compiler or we can also  say its a transpiler.const jsxheading=<h1>My name is Prashant</h1> this behind the scene is 
// getting converted to React.createElement by babel which JS engine can understand and that is later converted to HTML elements
// by ReactDOM.render().

