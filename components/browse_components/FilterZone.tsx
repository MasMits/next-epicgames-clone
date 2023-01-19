import {InputAdornment, TextField} from "@mui/material";
import * as React from "react";
import MultipleSelectCheckmarks from "./MultipleSelectCheckmarks";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SearchIcon from "@mui/icons-material/Search";


const FilterZone = () => {

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
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography variant="subtitle2" display="block" gutterBottom>
                    Filter (1)
                </Typography>
                <Button variant="text">Reset</Button>
            </Stack>
            <TextField
                fullWidth
                id="outlined-input-with-icon-textfield"
                label="Search"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon/>
                        </InputAdornment>
                    ),
                }}
                variant="outlined"
            />

            <MultipleSelectCheckmarks label={price.label} names={price.names}/>
            <MultipleSelectCheckmarks label={genre.label} names={genre.names}/>
        </Stack>
    );
};

export default FilterZone;