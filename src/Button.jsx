function Button() {

    let count = 0;
    const handleClick = (name) => {
        if (count < 3){
            count++;
            console.log(`${name} clicked ${count} times`)
        }
        else{
            console.log(`${name} You can't click anymore`)
        }
    }

    const handleClick2 = (e) => e.target.textContent = "OUCH!";

    return (<button onClick={ (e) => handleClick2(e)}>Click me</button>)
}
export default Button;