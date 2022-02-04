import {v1} from 'uuid';

export type MessageType = {
  id: string
  text: string
}

export type DialogType = {
  id: string
  name: string
  data: MessageType[]
}

export type DialogDataType = {
  data: Array<DialogType>
}

export const dialogData = [
  {
	id: v1(),
	name: 'Inna',
	data: [{id: v1(), text: 'Hi'}, {id: v1(), text: 'How are you Doing?'}]
  },
  {
	id: v1(),
	name: 'Daniel',
	data: [{id: v1(), text: 'Hi'}, {
	  id: v1(),
	  text: 'Do you remember me? We have meet in pub last summer'
	}]
  },
  {
	id: v1(),
	name: 'Adolf',
	data: [{id: v1(), text: 'Hi. I am starving'}, {
	  id: v1(),
	  text: 'Can you please buy some food for me?'
	}, {
	  id: v1(),
	  text: 'I will be glad to have fresh mouse today. '
	}, {
	  id: v1(),
	  text: 'Hey, if you will not bring me food in 1h, I"l destroy your working place. Time counting start!'
	}]
  },
  {
	id: v1(),
	name: 'Jana',
	data: [{
	  id: v1(),
	  text: 'Hello. You were request for design prices. Here they are!'
	}]
  },
]

