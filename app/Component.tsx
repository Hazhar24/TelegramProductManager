// Mark this file as a client component
"use client";
import { useState, useEffect, SetStateAction } from "react";

type dataName = string[];
interface UlProps {
  data: dataName;
}
const data: dataName = [
  "hazhar ghaderi",
  "ehsan safari",
  "farhad",
  "ehsan ghaderi",
  "shayan xzri",
  "hazhar safari",
];

function filterList(input: string) {
  const lowercasedInput = input.toLowerCase();
  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(lowercasedInput)
  );
  return filteredData;
}

function UlCommponent({ data }: UlProps) {
  console.log("data:", data);
  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

const Input1 = () => {
  const [state, setState] = useState("");
  const [resultData, setResultData] = useState<dataName>([]);

  useEffect(() => {
    if (state !== "") {
      const result = filterList(state);
      setResultData(result);
      console.log(result);
    } else {
      setResultData([]);
    }
  }, [state]);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setState(event.currentTarget.value);
  };

  return (
    <div className="flex flex-col">
      <label className="py-3" htmlFor="input1">
        Supplier
      </label>
      <input
        className="text-black rounded-md w-72 outline-none h-12 px-5"
        onChange={handleChange}
        type="text"
        id="input1"
        value={state}
        placeholder="Input Product ..."
      />
      {resultData?.length >= 1 ? <UlCommponent data={resultData} /> : ""}
    </div>
  );
};

export default Input1;
