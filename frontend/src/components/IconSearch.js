import React from 'react'
import {ICON_OPTIONS} from '../constants' 
import { Select } from 'grommet'

function IconSearch(){
  const [value, setValue] = React.useState('');
  const [options, setOptions] = React.useState(ICON_OPTIONS);
  return (
    <Select
      onSearch={(searchText) => {
        const regexp = new RegExp(searchText, 'i');
        setOptions(ICON_OPTIONS.filter(o => o.match(regexp)));
      }}
      options={options}
      value={value}
      onChange={({ option }) => setValue(option)}
      id="icon"
    />
  );
}

export default IconSearch