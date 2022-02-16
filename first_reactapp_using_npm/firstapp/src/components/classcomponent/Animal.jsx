import React from 'react';
class Animal extends React.Component
{
        render(){
            return (<div>{this.props.name}</div>)
        }
}

let test = ()=> {
    console.log("Hello Testing");
};
export {test};
export default Animal;
