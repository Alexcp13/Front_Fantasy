
import styled from 'styled-components';
import { usePoints } from '../../Providers/PointsProvider';

const PointsDisplay = () => {
    const { userPoints, isLoading } = usePoints();


    return (
        <PointsDiv>
            <p>
                {isLoading ? 'Cargando...' : `Puntos: ${userPoints}`}
            </p>
        </PointsDiv>
    );
};

export default PointsDisplay;

const PointsDiv = styled.div`
    position: absolute;
    right: 20px;
    font-size: 2rem;
    color: white;
    z-index: 9;

    @media (max-width: 1100px) { 
        position:relative;
        text-align: center;
       right: 0;
       margin-top: 20px;
       
      }
   
    `;
