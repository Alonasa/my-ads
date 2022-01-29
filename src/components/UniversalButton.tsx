import React, {ReactElement} from 'react';
import {Button, SvgIconProps} from '@material-ui/core';

type PropsType = {
  title: string
  onClick: () => void
  variant?: 'contained' | 'outlined' | 'text'
  color?: string
  endIcon?: ReactElement<SvgIconProps>
}

export const UniversalButton = (props: PropsType) => {
  return (
	<div>
	  <Button onClick={props.onClick} variant={props.variant} color={'primary'}
			  endIcon={props.endIcon}
			  style={{margin: '10px'}}>{props.title}</Button>
	</div>
  );
};