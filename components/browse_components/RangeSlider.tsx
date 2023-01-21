import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from "@mui/material/Typography";

function valuetext(value: number) {
    return `${value} UAH`;
}

export interface IProps {
    value: number[],
    setValue: Function
}
const RangeSlider = (props: IProps) => {

    const handleChange = (event: Event, newValue: number | number[]) => {
        props.setValue(newValue as number[]);
        props.setValue(newValue as number[])
    };

    return (
        <Box>
            <Typography gutterBottom>
                Price from {Math.min(...props.value)} to {Math.max(...props.value)} UAH
            </Typography>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={props.value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                min={0} max={5000}
            />
        </Box>
    );
}

export default RangeSlider;