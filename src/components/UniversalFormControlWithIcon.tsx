import React, {CSSProperties, ReactElement} from 'react';
import s from './UniversalFormControlWithIcon.module.css'
import {
  FormControl,
  InputAdornment,
  SvgIconProps,
  TextField
} from '@material-ui/core';

type PropsType = {
  style?: CSSProperties | undefined
  size?: 'small' | 'medium'
  type: string
  placeholder: string
  multiline: boolean
  icon?: ReactElement<SvgIconProps>
}

export const UniversalFormControlWithIcon = (props: PropsType) => {
  return (
	<div className={s.input}>
	  <FormControl variant="standard" style={props.style}>
		<TextField
		  size={props.size}
		  variant="outlined"
		  type={props.type}
		  multiline={props.multiline}
		  maxRows={4}
		  id="input-with-icon-adornment"
		  InputProps={{
			startAdornment:
			  <InputAdornment position="start">
				{props.icon}
			  </InputAdornment>
		  }}
		  placeholder={props.placeholder}
		/>
	  </FormControl>
	</div>

  );
};