import React from 'react';
import {AuthMenu} from '../../AuthMenu/AuthMenu';
import {ProfileContent} from './ProfileContent';

export const Profile = () => {
  return (
	<div>
	  <AuthMenu/>
	  <ProfileContent/>
	</div>
  );
};