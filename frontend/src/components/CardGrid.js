import React from 'react'
import Card from './Card'
import { GridContextProvider, GridDropZone, GridItem, swap} from "react-grid-dnd";
import {TESTCARDS, THEME} from '../constants'
import {Grommet, Box} from 'grommet'

function CardGrid() {
  const [cards, setCards] = React.useState(TESTCARDS); 

  function onChange(sourceId, sourceIndex, targetIndex, targetId) {
    const nextState = swap(cards, sourceIndex, targetIndex);
    setCards(nextState);
  }

  return (
    <Grommet theme={THEME}> 
      <Box pad="large" gap="medium">
        <GridContextProvider onChange={onChange}>
          <GridDropZone id="items" boxesPerRow={5} rowHeight={100} style={{ height: "400px" }}>
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

export default CardGrid