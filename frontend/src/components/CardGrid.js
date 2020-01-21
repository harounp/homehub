import React from 'react'
import Card from './Card'
import { GridContextProvider, GridDropZone, GridItem, swap} from "react-grid-dnd";
import {TESTCARDS, THEME} from '../constants'
import {Grommet, Box} from 'grommet'
// import Axios from '../api/Manager'

export default function CardGrid() {
  const [cards, setCards] = React.useState(TESTCARDS); 

  function onChange(sourceId, sourceIndex, targetIndex, targetId) {
    const nextState = swap(cards, sourceIndex, targetIndex);
    setCards(nextState);
  }

  return (
    <Grommet theme={THEME}> 
      <Box pad="medium" gap="medium">
        <GridContextProvider onChange={onChange}>
          <GridDropZone id="cards" boxesPerRow={6} rowHeight={50} style={{ height: "200px" }}>
            {cards.map(card => (
              <GridItem key={card} justify="center" align="center">
                <Card {...card}/>
              </GridItem>
            ))}
          </GridDropZone>
        </GridContextProvider>
      </Box>
    </Grommet>
  );
}