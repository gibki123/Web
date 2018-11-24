import React from 'react'
import { List } from 'semantic-ui-react'
import './PersonalData.scss'

const PersonalData = ({name, address, email,linkedin} ) => (
  <List className='PersonalData'>
    <List.Item icon='users' content={name} />
    <List.Item icon='marker' content={address} />
    <List.Item
      icon='mail'
      content={<a href='mailto:jack@semantic-ui.com'>[{email}]</a>}
    />
    <List.Item icon='linkify' content={<a href='http://www.semantic-ui.com'>{linkedin}</a>} />
  </List>
)

export default PersonalData