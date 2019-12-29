import React from 'react'
import { Anchor, Box, Grommet, Header } from 'grommet'
import {THEME} from "../constants"


class MyHeader extends React.Component{
  render(){
    return (
      <Grommet theme={THEME}>
        <Header background="dark-2" pad="small" round={{corner: "bottom", size: "small"}}>
          <Box direction="row" gap="medium">
            <Anchor label="Home" href="#" />
            <Anchor label="Test" href="#" />
          </Box>
        </Header>
      </Grommet>
    )
  }
}

export default MyHeader