function HelloMessage(props) {
    return <h1>Hello {props.name}!</h1>;
}
 
const element = <HelloMessage name="dass"/>;
 
ReactDOM.render(
    element,
    document.getElementById('example')
);