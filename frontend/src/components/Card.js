import React from 'react'
import { Grommet, Anchor, Box, Button } from "grommet";
import { THEME,  TESTCARDS } from "../constants"

class Card extends React.Component{
  renderCards(cardData){
    return(cardData.map(cardData =>
      <Box width="small" height="small" pad="medium" align="center" background="dark-2" round gap="small">
        <cardData.icon size="large" />
        <Anchor href={cardData.url} label={cardData.text} size="large"/>
        <Button label="New Tab" onClick={() => {window.open(cardData.url, "_blank")}} />
      </Box> 
    ))
  }
  
  render(){
    return (
      <Grommet theme={THEME}>
        <Box direction="row-responsive" pad="large" gap="medium" justify="center" align="center">
          {this.renderCards(TESTCARDS)}
        </Box>
      </Grommet>
    )
  }
}

export default Card