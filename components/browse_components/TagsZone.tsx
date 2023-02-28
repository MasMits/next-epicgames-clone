import {Autocomplete, TextField} from "@mui/material";
import {dataUpload} from "../../hooks/dataUpload";

const TagsZone = () => {
    let games = dataUpload();

    return (
        <div>
            <Autocomplete
                multiple
                id="tags-outlined"
                options={games.map((option) => option.data.game_name)}
                // getOptionLabel={(option) => option.data.game_name}
                defaultValue={[games[1].data.game_name]}
                filterSelectedOptions
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Filters"
                        placeholder=""
                        sx={{minWidth: 600 }}
                    />
                )}
            />

        </div>
    );
};

export default TagsZone;