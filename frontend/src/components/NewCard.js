import React from 'react'
import { Layer, Form, FormField, TextInput, Grommet , Box, Button, Anchor} from 'grommet'
import {THEME} from "../constants"
import {Add} from "grommet-icons"
import axios from '../api/Manager'
import IconSearch from './IconSearch'

function NewCard() {
  const [show, setShow] = React.useState(); 
  return (
    <Grommet theme={THEME}>
      <Box align="center" pad="xsmall" gap="xsmall" >
        <Box width="xsml" height="xsml" pad="small" align="center" 
        background="dark-3" round gap="small" onClick={() => setShow(true)}>
          <Add size="large" />
          <Anchor label="New Card" size="large"/>
        </Box>
        {show && (
          <Layer onEsc={() => setShow(false)} onClickOutside={() => setShow(false)}>
            <Box width="500px" height="500px" round pad="medium">
              <Form>
                <FormField label="Card Title">
                  <TextInput id="title" placeholder="ex: Google" />
                </FormField>
                <FormField label="Website URL">
                  <TextInput id="url" value="https://www." />
                </FormField>
                <FormField label="Card Icon">
                  <IconSearch />
                </FormField>
                <Button type="submit"  label="Create Card" 
                  onClick={() => {CreateCard(); setShow(false);}}
                />
              </Form>
            </Box>
          </Layer>
        )}
      </Box>
    </Grommet>
  )
}
function CreateCard(){
  const title = document.querySelector('#title').value
  const url = document.querySelector('#url').value
  const icon = document.querySelector('#icon__input').value
  axios.post('/', {
    title: title,
    url: url,
    icon: icon
  })
}

export default NewCard