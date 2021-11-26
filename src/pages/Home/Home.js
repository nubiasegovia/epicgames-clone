import Card from '../../components/structure/Card/Card'
import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

function Home() {

  const [games, setGames] = useState([]);
  const [mounted, setMounted] = useState(false);

  const getData = async () => {
    await axios.get('/game/findMany')
    .then(response => {
      if(mounted) {
        setGames(response.data)
      }
    })
  }

  useEffect(() => {
    setMounted(true)
    getData()
  }, [mounted])

  return (
      <StyledWrapper>
        {
          games.map(game => (
            <Card 
              id={game.id}
              image={game.image}
              title={game.name}
              preco={game.price}
              key={game.id}
            />
          ))
        }
      </StyledWrapper>

  )
}

const StyledWrapper = styled.div`
  display: flex;
  height: 362px;
  width: 824px;
`

export default Home;