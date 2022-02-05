import React from 'react';
import img from '../../img/item.png'
import {Paper} from '@material-ui/core';
import s from './ProductItemShort.module.css'
import {ItemsPropsType} from '../Pages/MainPage/MainContent';

export const ProductItemShort = (props: ItemsPropsType) => {
  const {items} = props;
  return (
	<>
	  {items.map(i => {
		return (
		  <li key={i.id} className={s.Catalog__item}
			  style={{listStyle: 'none'}}>
			<Paper className={s.Catalog__item_container}>
			  <Paper>
				<a href="#">
				  <picture>
					<img src={img} alt={'title'} width="140px"
						 height="100px"/>
				  </picture>
				</a>
			  </Paper>
			  <div className={s.Catalog__item_data}>
				<div className={'Catalog__item_info'}>
				  <a href="#">
					<h3>{i.title}</h3>
				  </a>
				  <p>{i.description}</p>
				</div>
				<div className={'Catalog__item_features'}>
					<span>{i.date}</span>
					<span>{i.location}</span>
				  </div>
				  <div className={'Catalog__item_features'}>
					<span>{i.price}</span>
					<span>{i.isFavorite}</span>
				  </div>
				</div>
			</Paper>
		  </li>
		)
	  })}
	</>
  );
}