import React from 'react';
import {FormControl, InputLabel, SelectChangeEvent} from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export interface IProps {
    setTypeOfCompare: Function,
}

const SortZone = (props: IProps) => {
    const [age, setAge] = React.useState('');
    const handleChange = (event: SelectChangeEvent) => {
        props.setTypeOfCompare(event.target.value);
        setAge(event.target.value);
    };
    return (
        <div>
            <FormControl variant="filled" sx={{minWidth: 180 }}>
                <InputLabel id="demo-simple-select-filled-label">Sort by:</InputLabel>
                <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={age}
                    onChange={handleChange}
                >
                    <MenuItem value={'Alphabetical'}>Alphabetical</MenuItem>
                    <MenuItem value={'Low_to_High'}>Price: Low to High</MenuItem>
                    <MenuItem value={'High_to_Low'}>Price: High to Low </MenuItem>
                </Select>
            </FormControl>

        </div>
    );
};

export default SortZone;