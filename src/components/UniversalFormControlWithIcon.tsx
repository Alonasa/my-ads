import React, {CSSProperties, ReactElement} from 'react';
import {FormControl, InputAdornment, TextField} from '@material-ui/core';

type propsType = {
  style?: CSSProperties | undefined
  type: string
  placeholder: string
  multiline: boolean
  children?: ReactElement
}

export const UniversalFormControlWithIcon = (props: propsType) => {
  return (
	<FormControl variant="standard" style={props.style}>
	  <TextField
		variant="outlined"
		type={props.type}
		multiline={props.multiline}
		maxRows={4}
		id="input-with-icon-adornment"
		InputProps={{
		  startAdornment:
			<InputAdornment position="start">
			  {props.children}
			</InputAdornment>
		}}
		placeholder={props.placeholder}
	  />
	</FormControl>
  );
};