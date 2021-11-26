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
              <StyledTitle>{props.title}</StyledTitle>
              <StyledPrice>{'R$ ' + props.preco}</StyledPrice>
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
  align-items: center;
  padding: 4%;

`;

const StyledTitle = styled.div`
  font-family: Hussar, sans serif;
  color: #F5F5F5;
  font-size: 1.2em;
  line-height: 25px;
  letter-spacing: -0.2px;
`;
const Img = styled.img`
  width: 380px;
  height: 200px;
  border-radius: 16px;
`;

const StyledPrice = styled.div`
  color: #CCCCCC;
`;
export default Card;