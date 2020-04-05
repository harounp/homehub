import React from 'react'
import { Layer, Form, FormField, TextInput, Grommet , Box, Button } from 'grommet'
import {Add} from "grommet-icons"
import axios from '../api/Manager'
import IconSearch from './IconSearch'

function NewCard() {
  const [show, setShow] = React.useState(); 
  return (
    <>
      <Button icon={<Add />} label="Add Card" onClick={() => setShow(true)} />
      {show && (
        <Layer onEsc={() => setShow(false)} onClickOutside={() => setShow(false)}>
          <Box width="500px" height="500px" round pad="medium">
            <Form>
              <FormField label="Card Title">
                <TextInput id="title" placeholder="ex: Google" />
              </FormField>
              <FormField label="Website URL">
                <TextInput id="url" value="https://www.EXAMPLE.com" />
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
    </>
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