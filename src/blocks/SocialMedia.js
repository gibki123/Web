import React from 'react'
import { Button } from 'semantic-ui-react'

function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }

const SocialMedia = () => (
  <div>
    <Button circular color='facebook' icon='facebook' onClick={() => openInNewTab('https://www.facebook.com/maciej.krol.370')}/>
    <Button circular color='twitter' icon='twitter' />
    <Button circular color='linkedin' icon='linkedin' />
    <Button circular color='google plus' icon='google plus' />
  </div>
)

export default SocialMedia