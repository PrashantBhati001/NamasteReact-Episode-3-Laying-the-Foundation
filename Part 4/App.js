import React from 'react';
import ReactDOM from 'react-dom/client';
//React Element
// const jsxheading=<h1>My name is Prashant</h1>


//React component
// React component is a function which returns some piece of JSX

const Title=()=>{
    return <h1>Namaste React</h1>
}
const Heading=()=>{
    return (
        <div>
            <Title />
            <h1>My name is Prashant and I am learning functional component</h1>
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<Heading/>)



// Component Composition is component inside component,above is an exapmle of component composition




