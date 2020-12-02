import { FormControl, FormHelperText, InputLabel, MenuItem, Select as MuiSelect } from '@material-ui/core';
import React from 'react'

export default function SelectJuego(props) {

    const {name, label, value, onChange, options} = props;
    console.log(options)
    return (
        <FormControl
        variant="outlined">
            <InputLabel>{label}</InputLabel>
            <MuiSelect
            label={label}
            name={name}
            value={value}
            onChange={onChange}>
                <MenuItem value="">Ninguno</MenuItem>
                {
                    
                    options.map(
                    item => (<MenuItem value={item.idJuego} key={item.idJuego}>{item.nombreTitulo}</MenuItem>)
                    )
                }
            </MuiSelect>
        </FormControl>
    )
}
