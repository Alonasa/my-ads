import React from 'react';
import {ProductItemShort} from './ProductItemShort';
import s from './ListItems.module.css'
import {Container} from '@material-ui/core';

export const ListItems = () => {
  const items = [
	{
	  id: 0,
	  title: 'I am item',
	  description: 'Please add description',
	  price: 100,
	  location: 'Kiev',
	  date: 'today',
	  currency: '$',
	  isFavorite: false,
	  isTop: true
	},
	{
	  id: 1,
	  title: 'I am item',
	  description: 'Please add description',
	  price: 1001,
	  location: 'Kiev',
	  date: 'today',
	  currency: '$',
	  isFavorite: true,
	  isTop: true
	},
	{
	  id: 2,
	  title: 'I am item',
	  description: 'Please add description',
	  price: 1001,
	  location: 'Kiev',
	  date: 'today',
	  currency: '$',
	  isFavorite: true,
	  isTop: true
	},
	{
	  id: 3,
	  title: 'I am item',
	  description: 'Please add description',
	  price: 1001,
	  location: 'Kiev',
	  date: 'today',
	  currency: '$',
	  isFavorite: true,
	  isTop: true
	}
  ]
  
  return (
	 <Container className={s.List__container}>
	   <ul className={s.List}>
		 <ProductItemShort items={items}/>
	   </ul>
	 </Container>
  );
};