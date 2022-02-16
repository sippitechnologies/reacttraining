function Student(props)
{
        return (<div><h1>{props.name}</h1>
        <h1>{props.address.state}</h1>
        <h2>{props.age}</h2></div>)

}

/*function Student({name})
{
        return (<div><h1>{name}</h1>
        <h2>{}</h2></div>)
}*/
export default Student;