import Header from './components/MyHeader'
import React, { useEffect } from 'react'
import Card from './components/Card'
import { GridContextProvider, GridDropZone, GridItem, swap} from "react-grid-dnd";
import { THEME } from './constants'
import {Grommet, Box} from 'grommet'
import axios from './api/Manager'

const App = () => {
  const [cards, setCards] = React.useState(); 
  
  this.handler.bind(this)
  handler = (action) => {
    if (action["delete"]){
      newCards = cards.filter(card => card.id!=action["id"])
      setCards(newCards)
    } else if(action["create?"]){
      newCards = [cards , action["card"]]
      setCards(newCards)
    }
  }

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
    <>
      <Header action={this.handler}/>
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
    </>
  );
}

export default App