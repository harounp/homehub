import React from 'react'
import {Anchor, Box, Button } from "grommet";
import * as Icons from "grommet-icons";

export default class Card extends React.Component{
  render(){
    return (
      <>
        {this.renderCard(this.props)}
      </>
    )
  }

  renderCard(cardData){
    const Icon = Icons[cardData.icon]
    return(
      <Box width="small" height="small" pad="medium" align="center" background="dark-1" round gap="small">
        <Icon size="large" />
        <Anchor href={cardData.url} label={cardData.title} size="large"/>
        <Button label="New Tab" onClick={() => {window.open(cardData.url, "_blank")}} />
      </Box> 
    )
  }
}