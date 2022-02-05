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

const user1Id = v1();
const user2Id = v1();
const user3Id = v1();
const user4Id = v1();

export const dialogData = [
  {
	id: user1Id,
	name: 'Inna',
	data: [{id: v1(), text: 'Hi'}, {id: v1(), text: 'How are you Doing?'}]
  },
  {
	id: user2Id,
	name: 'Daniel',
	data: [{id: v1(), text: 'Hi'}, {
	  id: v1(),
	  text: 'Do you remember me? We have meet in pub last summer'
	}]
  },
  {
	id: user3Id,
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
	id: user4Id,
	name: 'Jana',
	data: [{
	  id: v1(),
	  text: 'Hello. You were request for design prices. Here they are!'
	}]
  },
]

type PathType = {
  ERROR_404: string
  PROFILE: string
  MESSAGES: string
  DIALOGS: string
}

export type StateType = {
  state: StateElementsType
}

type StateElementsType = {
  PATH: PathType
}

export const state = {
  PATH: {
	ERROR_404: '/404',
	PROFILE: '/Profile',
	MESSAGES: 'Messages',
	DIALOGS: '/dialogs/'
  }
}