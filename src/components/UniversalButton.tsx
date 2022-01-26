import React from 'react';
import {Button} from '@material-ui/core';

type PropsType = {
  title: string
  onClick: () => void
  variant?: 'contained' | 'outlined' | 'text'
  color?: string
}

export const UniversalButton = (props: PropsType) => {
  return (
	<div>
	  <Button onClick={props.onClick} variant={props.variant} color={'primary'}>{props.title}</Button>
	</div>
  );
};