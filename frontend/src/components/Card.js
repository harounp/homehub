import React from 'react'
import {Anchor, Box, Button } from "grommet";

class Card extends React.Component{

  render(){
    return (
      <>
        {renderCard(this.props)}
      </>
    )
  }
}

function renderCard(cardData){
  return(
    <Box width="small" height="small" pad="medium" align="center" background="dark-2" round gap="small">
      <cardData.icon size="large" />
      <Anchor href={cardData.url} label={cardData.text} size="large"/>
      <Button label="New Tab" onClick={() => {window.open(cardData.url, "_blank")}} />
    </Box> 
  )
}

export default Card