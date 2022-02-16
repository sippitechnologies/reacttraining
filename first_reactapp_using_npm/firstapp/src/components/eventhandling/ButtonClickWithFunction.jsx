let ButtonClick=(props)=>{

    let handleClick=()=> {
        console.log(`My Name is ${props.name} and My Age is ${props.age}`)
    }

    return (<button onClick={handleClick}>Click Me</button>)

}
export default ButtonClick;