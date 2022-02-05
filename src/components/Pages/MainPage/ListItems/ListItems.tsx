import React from 'react';
import {ProductItemShort} from '../../../ProductItemShort/ProductItemShort';
import s from './ListItems.module.css'
import {ItemsPropsType} from '../MainContent';

export const ListItems = (props: ItemsPropsType) => {
  const {items} = props;
  return (
	<div className={s.List__container}>
	  <ul className={s.List}>
		<ProductItemShort items={items}/>
	  </ul>
	</div>
  );
};