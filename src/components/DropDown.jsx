import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';

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

export default function DropDown({question}) {

  return (
    <div>
      <FormControl sx={{ m: 1, width: '90%', mt: 3 , bgcolor: '#f2f2f2'}}>
        <Select
          displayEmpty
          value=''
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>{question.Question}</em>;
            }
            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
            <Typography sx={{p: 3}}>
              {question.Answer}
            </Typography>
        </Select>
      </FormControl>
    </div>
  );
}
