import React from 'react'
import {Anchor, Box, Button } from "grommet";
import * as Icons from "grommet-icons";
import axios from '../api/Manager'

export default class Card extends React.Component{
  render(){
    return (
      <>
        {this.renderCard(this.props)}
      </>
    )
  }
  constructor() {
    super();
    this.state = {
      isMouseInside: false
    };
  }
  mouseEnter = () => {
    this.setState({ isMouseInside: true });
  }
  mouseLeave = () => {
    this.setState({ isMouseInside: false });
  }
  DeleteCard(id){
    axios.delete('/'+id)
  }

  renderCard(cardData){
    const Icon = Icons[cardData.icon]
    return(
      <Box width="small" height="small" pad="medium" align="center" background="dark-1" round gap="small" 
      onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
        <Icon size="large" />
        <Anchor href={cardData.url} label={cardData.title} size="large"/>
        <Button label="New Tab" onClick={() => {window.open(cardData.url, "_blank")}} />
        {this.state.isMouseInside ? <Icons.Trash size="small" align="left" 
        onClick={() => {this.DeleteCard(cardData.id)}}/> : null }
      </Box> 
    )
  }
}