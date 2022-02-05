import React from 'react';
import {ItemsPropsType, MainContent} from './MainContent';
import {MainHeader} from './MainHeader/MainHeader';


export const Main = (props: ItemsPropsType) => {
  return (
	<div>
	  <MainHeader/>
	  <MainContent items={props.items}/>
	</div>
  );
};