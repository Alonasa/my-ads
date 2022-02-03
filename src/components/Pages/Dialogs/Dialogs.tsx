import React from 'react';
import {Message} from '../../Messages/Message';
import {AuthMenu} from '../../AuthMenu/AuthMenu';
import s from './Dialogs.module.css'

export const Dialogs = () => {
  return (
	<div className={s.dialogs}>
	  <AuthMenu/>
	  <ul className={s.dialogs__list}>
		<li className={s.dialog__item}><span>Inna</span></li>
		<li className={s.dialog__item}><span>Daniel</span></li>
		<li className={s.dialog__item}><span>Adolf</span></li>
		<li className={s.dialog__item}><span>Janna</span></li>
	  </ul>
	 <Message/>
	</div>
  );
};