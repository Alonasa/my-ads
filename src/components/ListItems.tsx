import React from 'react';
import {ProductItemShort} from './ProductItemShort';


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
	}
  ]
  
  return (
	<ul style={{padding: 0, display: 'flex', justifyContent: 'space-between'}}>
	  <ProductItemShort items={items}/>
	</ul>
  );
};