import { useEffect, useState } from "react";

const Select = ({name, data, getValue}) => {
    const [value, setValue] = useState(data[0].code);

    useEffect(() => {
        getValue(value);
    }, []);

    return (
        <select onChange={(event) => {
            setValue(event.target.value);
            getValue(event.target.value);
        }} className="border-gray-400 border mx-1 rounded-md" name={name}>
            { data.map((obj, key) => {
                return <option key={key} value={obj.code}>{obj.name}</option>
            })}
        </select>
    )
};

export default Select;