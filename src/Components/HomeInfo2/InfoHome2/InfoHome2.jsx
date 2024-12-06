import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const InfoHome2 = () => {
    return (
        <DivInfoHome className='container'>
            <div className='card'>
                <div className='imgBx'>

                    <img src="https://res.cloudinary.com/dhqmsb9vm/image/upload/v1730216680/cofre_mcozbm.avif" alt="img1" />
                </div>
                <div className='contentBx'>

                    <div className='content'>

                        <h3>Cofre</h3>
                        <p>
                            Descubre los distitnos tipos de cofre donde conseguiras tus relojes

                        </p>





                    </div>

                </div>
            </div>
            <div className='card'>
                <div className='imgBx'>
                    <img src="https://res.cloudinary.com/dhqmsb9vm/image/upload/v1730217131/puntos_j0k1id.jpg" alt="img1" />
                </div>
                <div className='contentBx'>
                    <div className='content'>
                        <h3> Sistema de puntos</h3>
                        <p>
                            La pagina cuenta con su propio sistema de puntos que podras gastar

                        </p>

                    </div>

                </div>
            </div>
            <div className='card'>
                <div className='imgBx'>
                    <img src="https://res.cloudinary.com/dhqmsb9vm/image/upload/v1730217239/relojes_w2u29k.webp" alt="img1" />
                </div>
                <div className='contentBx'>
                    <div className='content'>
                        <h3> Coleccion</h3>
                        <p>Decide si coleccionar tus relojes o venderlos para conseguir puntos

                        </p>

                    </div>

                </div>
            </div>
            <div className='card'>
                <div className='imgBx'>
                    <img src="https://res.cloudinary.com/dhqmsb9vm/image/upload/v1730217361/mercado_jqpzw5.jpg" alt="img1" />
                </div>
                <div className='contentBx'>
                    <div className='content'>
                        <h3> Mercado</h3>
                        <p>Podras vender o comprar relojes a otros jugadores

                        </p>

                    </div>

                </div>
            </div>
            <div className='card'>
                <div className='imgBx'>
                    <img src="https://res.cloudinary.com/dhqmsb9vm/image/upload/v1730217395/usuario_r92ils.webp" alt="img1" />
                </div>
                <div className='contentBx'>
                    <div className='content'>
                        <h3>Usuario</h3>
                        <p>Podras crear un usuarios para guardar tu progreso

                        </p>

                    </div>

                </div>
            </div>
            <div className='card'>
                <div className='imgBx'>
                    <img src="https://res.cloudinary.com/dhqmsb9vm/image/upload/v1730217641/error_jcaaze_c_crop_h_530_muwfk2.avif" alt="img1" />
                </div>
                <div className='contentBx'>
                    <div className='content'>
                        <h3>Error</h3>
                        <p>Si encuentras algun tipo de bug o error puedes mandar un mensaje a este correo

                        </p>
                        <a href="mailto:alex1234@gmail.com">Contacta con nosotros</a>

                    </div>

                </div>
            </div>
        </DivInfoHome >
    )
}

export default InfoHome2


const DivInfoHome = styled.div`

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap:wrap ;
    max-width: 1100px;
   



.card{
    position: relative;
    width: 320px;
    height: 320px;
    margin: 15px;
    overflow: hidden;
}

.card .imgBx,
.card .contentBx {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
}
 .card .imgBx img {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
object-fit: cover;

}
 .card .contentBx::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    background: rgb(255, 255, 255);
    transition: 0.5s;
    transform:scaleX(0) ;
    transition: transform 0.5s ease-in-out;
    transform-origin: right;
    transition-delay: 0.5s ;
} 
.card:hover .contentBx::before{
    transform:scaleX(1) ;
    transition: transform 0.5s ease-in-out;
    transform-origin: left;
    
   
} 
.card .contentBx{
    display: flex;
    justify-content: center;
    align-items: center;
}

.card .contentBx .content{

    position: relative;
    padding: 30px;
    z-index: 1;
    transition: 0.5s;
    transform:translateY(-300px) ;
    transition-delay: 0s ;
}
.card:hover .contentBx .content{
    transform:translateY(0px);
    transition-delay: 0s ;
}
.card:hover .contentBx .content h3{
    font-size: 1.3em;
    text-transform: uppercase;
    letter-spacing: 1px;

}
.card:hover .contentBx .content p{
    font-size: 1em;
    line-height: 1.4em;
    font-weight: 300;
}






    

`