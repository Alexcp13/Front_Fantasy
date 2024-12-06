import React from 'react'
import styled from 'styled-components'

const InfoHome1 = () => {
    return (
        <DivInfoHome>
            <div className='card'>
                <div className='content'>
                    <h2>Rolex</h2>
                    <p>Los relojes Rolex son el pinaculo de la elegancia y precision,
                        conocidos por su diseño atemporal y durabilidad extrema.</p>

                </div>
                <img className='photoHome' src="https://res.cloudinary.com/dhqmsb9vm/image/upload/v1730117847/Casino/pngegg_ardf4d.png" alt="" />
            </div>
            <div className='card'>
                <div className='content'>
                    <h2>Audemars Piguet</h2>
                    <p>Los relojes Audemars Piguet representan la excelencia en la alta relojería,
                        destacandose por su diseño innovador y artesania magistral. </p>

                </div>
                <img className='photoHome' src="https://res.cloudinary.com/dhqmsb9vm/image/upload/v1730120648/Casino/reloj2_vdqskw.png" alt="" />
            </div>




        </DivInfoHome>
    )
}

export default InfoHome1

const DivInfoHome = styled.div`


position: relative;
display: flex;
justify-content: center;
align-items: center;

.photoHome{
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    bottom: 0;
    width: auto;
    height: 300px;
    transition: 0.5s;
    
    
}
.photoHome:hover{
  left: 80%;
  height:400px;
}
.card{
    position: relative;
    width: 600px;
    min-height: 350px;
   
    margin: 20px;
    display: flex;
    transition: 0.5s;
    justify-content: flex-start;
    align-items: center;
    background: linear-gradient(45deg, #2c3238, #4f5a6d);
}
.content{
    position: relative;
    width: 50%;
    left:20%;
    padding: 20px,20px,20px, 40px;
    opacity: 0;
    visibility: hidden;
    transition: 0.5s;
}

.card:hover .content{
    opacity: 1;
    visibility: visible;
    left: 0;
    
}
.card .content h2{
    color: white;
    text-transform: uppercase;
    font-size: 2.2em;
    line-height:1em ;

}
.card .content p{
    color: white;
   
}
@media (max-width: 991px)
{
display: flex;
flex-direction: column;
    .card{
        width:auto;
        max-width: 600px;
        align-items: flex-start;

    }
    .card:hover{
        height: 600px;
    }
    .card:hover img {
        left: 50%;
        height: 350px;
    }

.card .content {
    width: 100%;
    left: 0;
    padding: 40px;
}
}


`