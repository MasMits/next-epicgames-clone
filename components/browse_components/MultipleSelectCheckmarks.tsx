import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export interface ISelectProps{
    label: string,
    names: string[]
}

export default function MultipleSelectCheckmarks(games: ISelectProps) {
    const [option, setOption] = React.useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof option>) => {
        const {
            target: { value },
        } = event;
        setOption(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <FormControl sx={{ width: 300 }}>
                <InputLabel id="demo-multiple-checkbox-label">{games.label}</InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={option}
                    onChange={handleChange}
                    input={<OutlinedInput label="GENRE" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                >
                    {games.names.map((name) => (
                        <MenuItem key={name} value={name}>
                            <Checkbox checked={option.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
