import React, {useState} from "react";
// import userEvent from "@testing-library/user-event";


const CalculatorBox =() =>{

    const [result, setResult] = useState(null);
    const [num1, setNumber1] = useState(null);
    const [num2, setNumber2] = useState(null);
    const [flag, setFlag] = useState(false);
    const [redGreen, setRedGreen] = useState('green');

    

    function oprations(e){
        // console.log(e);
        setFlag('false');

        if (isNaN(num1) || isNaN(num2)) {
            setResult('Plz Enter The Number Only...')
            setFlag('Error!');
            setRedGreen('red')
            return
        }

        if (!num1) {
            setResult('Num1 Connot be Empty')
            setFlag('Error!');
            setRedGreen('red')
            return;
        }
        else if (!num2) {
            setResult('Num2 Connot be Empty')
            setFlag('Error!');
            setRedGreen('red')
            return;
        }


        let op = e.target.innerText;
        switch(op){
            case '+':
                setResult(num1 + num2)
                setFlag('Success!');
                break;

            case '-':
                setResult(num1 - num2)
                setFlag('Success!');
                break;

            case '*':
                setResult(num1 * num2)
                setFlag('Success!');
                break;

            case '/':
                setResult(num1 / num2)
                setFlag('Success!');
                break;

            default:
                break;
        }

        setRedGreen('green')

    }

    return (
        <div className="card">
            <h1>React Calculator</h1>
            <input type="text" onChange={(e) => setNumber1(Number(e.target.value))} placeholder="0"/>
            <input type="text" onChange={(e) => setNumber2(Number(e.target.value))} placeholder="0"/>


            <div className="btns">
                <button onClick={oprations}>+</button>
                <button onClick={oprations}>-</button>
                <button onClick={oprations}>*</button>
                <button onClick={oprations}>/</button>
            </div>
            {/* <h1>Hello</h1> */}
            {flag && <h3 style={{ color: redGreen }}> {flag}</h3>}

            {result == 0 && <h2>Result : {result}</h2>}

            {result != 0 ? result && <h2>Result : {result}</h2> :'' }
        </div>
    )
}

export default CalculatorBox;