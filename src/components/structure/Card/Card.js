import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { BsPlusCircle } from "react-icons/bs";

function Card(props) { 

    const navigate = useNavigate();

    const goToGamePage = () => {
        navigate('/game', { state: props.id })
      }

    const wishGame = () => {
        const token = localStorage.token;
        const config = {
            headers: { Authorization: `Bearer ${token} `}
        }
        const id = props.id;

        axios.get(`/game/wish/${id}`, config)
    }

    return (
          <StyledCard>
            <CardItens onClick={goToGamePage}>
                <Img src={props.image} alt={props.title} />
              <h3 className='card-title'>{props.title}</h3>
              <span className='card-preco'>{'R$ ' + props.preco}</span>
            </CardItens>
            <button className='wishlist' onClick={wishGame}>
              <BsPlusCircle color="grey" />
            </button>
          </StyledCard>
          
    )
}

const StyledCard = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardItens = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;align-items: center;

`;
const Img = styled.img`
  width: 250px;
  height: 150px;
  border-radius: 16px;
`;

export default Card;