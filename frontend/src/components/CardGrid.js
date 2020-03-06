import React, { useEffect } from 'react'
import Card from './Card'
import { GridContextProvider, GridDropZone, GridItem, swap} from "react-grid-dnd";
import { THEME } from '../constants'
import {Grommet, Box} from 'grommet'
import axios from '../api/Manager'

const CardGrid = () => {
  const [cards, setCards] = React.useState(); 
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('/',);
      setCards(result.data);
    };
    fetchData();
  }, []);

  function onChange(sourceId, sourceIndex, targetIndex, targetId) {
    const nextState = swap(cards, sourceIndex, targetIndex);
    setCards(nextState);
  }

  return (
    <Grommet theme={THEME}> 
      <Box pad="medium" gap="medium">
        <GridContextProvider onChange={onChange}>
          <GridDropZone id="cards" boxesPerRow={6} rowHeight={200} style={{ height: "200px" }}>
            {cards && cards.length > 0 && cards.map(card => (
              <GridItem key={card.id} >
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