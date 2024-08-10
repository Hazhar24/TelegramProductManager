
import { SetStateAction, useEffect, useState } from 'react'
import { start } from 'repl';
"use client";
const data = ["hazhar ghaderi", "ehsan safari", "farhad", "ehsan ghaderi", "shayan xzri", "hazhar safari"];

function filterList(input: string) {
    const lowercasedInput = input.toLowerCase();
    const filteredData = data.filter(item => item.toLowerCase().includes(lowercasedInput))
    return filteredData
}


function UlCommponent(data) {
    console.log("data:", data);
    return (
        <ul>
            {
                data.data.map((item, index) => <li key={index}>{item}</li>)
            }
        </ul>
    )

}

const Input1 = () => {
    const [state, setState] = useState("")
    const [resultData, setResultData] = useState([])

    useEffect(() => {
        if (state !== "") {
            const result = filterList(state)
            setResultData(result)
            console.log(result);
        } else {
            setResultData([])
        }
    }, [state])

    const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setState(event.target.value);
    };

    return (
        <div>
            <div className="flex flex-col">
                <label className="py-3" htmlFor="input1">Supplier</label>
                <input
                    className="text-black rounded-md w-72 outline-none h-12 px-5"
                    onChange={handleChange}
                    type="text"
                    id="input1"
                    value={state}
                    placeholder="Input Product ..."
                />
                {resultData?.length >= 1 ? <UlCommponent data={resultData} /> : ''}

            </div>
        </div>
    )
}
