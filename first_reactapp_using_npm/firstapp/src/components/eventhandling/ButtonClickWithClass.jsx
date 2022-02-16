import React from 'react'
class ButtonClick1 extends React.Component
{
    

    //This is accessible in Arrow function, not available in Simple function
    //If you want this is available in normal function then you need to write the code in contructur to bind this
    constructor(props)
    {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    // handleClick=()=> {
    //     console.log(`My Name is ${this.props.name} and My Age is ${this.props.age}`)
    // }
      handleClick=function() {
        console.log(`My Name is ${this.props.name} and My Age is ${this.props.age} `,this);
    }
    render()
    {
        return <button onClick={this.handleClick}>Click Class Button</button>
    }
}


export default ButtonClick1;