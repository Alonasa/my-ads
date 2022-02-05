import React from 'react';
import {ItemsPropsType, MainContent} from '../MainPage/MainContent';
import {MainHeader} from '../MainHeader/MainHeader';
import {ItemType} from '../../Redux/state';


export const Main = (props: ItemsPropsType) => {
  return (
	<div>
	  <MainHeader/>
	  <MainContent items={props.items}/>
	</div>
  );
};