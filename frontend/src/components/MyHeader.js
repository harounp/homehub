import React from 'react'
import NewCard from './NewCard'
import { Button, Box, Grommet, Header, TextInput } from 'grommet'
import { Search } from 'grommet-icons'
import {THEME} from "../constants"


class MyHeader extends React.Component{
  state = { searchText: '' }

  render(){
    return (
      <Grommet theme={THEME}>
        <Header background="dark-1" pad="small" round={{corner: "bottom", size: "small"}}>
          <Box direction="row" gap="small">
            <TextInput placeholder="Type here" value={this.state.searchText} 
            onChange={event => this.setState({searchText: event.target.value})} />
            <Button icon={<Search />} label="Search" onClick={() => {}} flex/>
          </Box>
          <NewCard />
        </Header>
      </Grommet>
    )
  }

  AddCard(){
    
  }
}

export default MyHeader