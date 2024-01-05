import React from 'react';
import ReactDOM from 'react-dom/client';


const heading=<h1>Welcome</h1>

const Title=()=>{
    return <h1>Namaste React</h1>
}


// const data=api.getData()

const Heading=()=>{
    return (
        <div>
            
            {heading}   
            <Title />
            {Title()}
            <h1>My name is Prashant and I am learning functional component</h1>
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<Heading/>)



//JSX  also prevents cross site scripting attack.Lets say we have an api which is fetching some malicious data and we are putting
// that data in the JSX,then JSX will take care of that data and will filter out the malicious data

//Very important point that we can observe is that we write the component like <Title/> or <Title><Title/> or{Title()}.In the 
// last one we are calling the function,basically a component is a fucntion at the end of the Day
