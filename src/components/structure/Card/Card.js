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
            <div className='card-item' onClick={goToGamePage}>
              <div className='card-image'>
                <Img src={props.image} alt={props.title} />
              </div>
              <h2 className='card-title'>{props.title}</h2>
              <span className='card-preco'>{'R$ ' + props.preco}</span>
            </div>
            <button className='wishlist' onClick={wishGame}>
              <BsPlusCircle color="grey" />
            </button>
          </StyledCard>
          
    )
}

const StyledCard = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  width: 100%;
  heigth: 222px;
  border-radius: 16px;
`;

export default Card;