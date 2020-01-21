import React from 'react'
import { Layer, Select , Form, FormField, TextInput, Grommet , Box, Button, Anchor} from 'grommet'
import {THEME} from "../constants"
import {Add} from "grommet-icons"
import * as Icons from "grommet-icons"
import axios from '../api/Manager'

function NewCard() {
  const [show, setShow] = React.useState(); 
  return (
    <Grommet theme={THEME}>
      <Box align="center">
        <Box width="xsml" height="xsml" pad="medium" align="center" 
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
                  <TextInput id="url" placeholder="ex: https://www.google.com" />
                </FormField>
                <FormField label="Card Icon">
                  <IconSelect id="icon"/>
                </FormField>
                <Button type="submit"  label="Create Card" 
                onClick={() => {CreateCard(); setShow(false);}}
                />
              </Form>
            </Box>
          </Layer>
        )}
      </Box>
    </ Grommet>
  )
}
function CreateCard(){
  const title = document.querySelector('#title').value
  const url = document.querySelector('#url').value
  const icon = 'Test'
  axios.post('/', {
    title: title,
    url: url,
    icon: icon
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}
function IconSelect() {
  return (
    <Select
      options={Icons}
    />
  );
}

export default NewCard