import {InputAdornment, TextField} from "@mui/material";
import * as React from "react";
import MultipleSelectCheckmarks from "./MultipleSelectCheckmarks";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SearchIcon from "@mui/icons-material/Search";
import RangeSlider from "./RangeSlider";

export interface IProps {
    value: number[],
    setValue: Function
    genres: string[],
    setGenres: Function,
    setSearchTitle: Function
}

const FilterZone = (props: IProps) =>{

    const genre = {
        label: "GENRE",
        names: [
            'Action',
            'Action-Adventure',
            'Adventure',
            'Card-Game',
            'Casual',
        ]
    };

    const price = {
        label: "PRICE",
        names: [
            'Free',
            'Under UAN 300.00',
            'Under UAN 600.00',
            'Under UAN 900.00',
            'Discounted',
        ]
    };

    return (
        <Stack gap={2}>
            <Stack direction="row" justifyContent="flex-end" alignItems="center">
                <Button variant="text">Reset</Button>
            </Stack>
            <TextField
                fullWidth
                id="outlined-input-with-icon-textfield"
                label="Search"
                onChange={(event) => props.setSearchTitle(event.target.value)}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon/>
                        </InputAdornment>
                    ),
                }}
                variant="outlined"
            />
            <MultipleSelectCheckmarks label={genre.label} names={genre.names} genres={props.genres} setGenres={props.setGenres}/>
            <RangeSlider setValue={props.setValue} value={props.value}/>

        </Stack>
    );
};

export default FilterZone;