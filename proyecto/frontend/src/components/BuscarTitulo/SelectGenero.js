import React from 'react'
import { FormControl, FormHelperText, InputLabel, MenuItem, Select as MuiSelect } from '@material-ui/core';

export default function SelectGenero(props) {

    const { name, label, value, onChange } = props;

    return (
        <div>
            <FormControl variant="outlined"            >
                <InputLabel>{label}</InputLabel>
                <MuiSelect
                    name={name}
                    value={value}
                    onChange={onChange}>
                    <MenuItem value="">None</MenuItem>
                    <MenuItem key="1" value="Hombre">Hombre</MenuItem>
                    <MenuItem key="2" value="Mujer">Mujer</MenuItem>
                    <MenuItem key="3" value="Otro">Otro</MenuItem>
                </MuiSelect>
            </FormControl>
        </div>


    )
}