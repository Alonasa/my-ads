import React from 'react';
import {MessageType} from '../../../state';

type MessageListType = {
  items: Array<MessageType>
}

export const MessagesList = (props: MessageListType) => {
  return (
	<div>
	  {props.items.map(m=> {
		return <div key={m.id}>{m.text}</div>
	  })}
	</div>
  );
};