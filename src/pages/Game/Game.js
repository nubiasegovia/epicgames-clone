import Card from "../../components/structure/Card/Card";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

function Game() {
  const state = useLocation();
  const id = state.state;

  const [game, setGame] = useState([]);
  const [mounted, setMounted] = useState(false);

  const getData = async () => {
    await axios.get(`/game/find/${id}`)
    .then((response) => {
      if (mounted) {
        setGame(response.data);
      }
    });
  };

  useEffect(() => {
    setMounted(true);
    getData();
  // eslint-disable-next-line
  }, [mounted]);

  return (
    <StyledWrapper>
        <Card
          id={game.id}
          image={game.image}
          title={game.name}
          preco={game.price}
          key={game.id}
        />
    </StyledWrapper>
      );
 
};


const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  max-width: 800px;
`;

export default Game;
