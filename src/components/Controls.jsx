import React, {useState} from 'react';
import {Search} from "./Search";
import {CustomSelect} from "./CustomSelect";

const options = [
    {value: 'Africa', label: 'Africa'},
    {value: 'America', label: 'America'},
    {value: 'Asia', label: 'Asia'},
    {value: 'Europa', label: 'Europa'},
    {value: 'Oceania', label: 'Oceania'},
]

const Controls = () => {
    const [search, setSearch] = useState()
    return (
        <div>
            <Search search={search} setSearch={setSearch}/>
            <CustomSelect options={options}/>
        </div>
    );
};

export default Controls;
