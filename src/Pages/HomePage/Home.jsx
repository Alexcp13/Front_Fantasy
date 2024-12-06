import React from 'react'
import HomeTitle from '../../Components/HomeTitle/HomeTitle'
import styled, { css } from 'styled-components'
import { useInView } from 'react-intersection-observer'
import TextHome1 from '../../Components/HomeInfo1/TextHome1/TextHome1'


import InfoHome1 from '../../Components/HomeInfo1/InfoHome1/InfoHome1'
import InfoHome2 from '../../Components/HomeInfo2/InfoHome2/InfoHome2'
import TextHome2 from '../../Components/HomeInfo2/TextHome2/TextHome2'

const HomePage = () => {
    const { ref: ref1, inView: inView1 } = useInView({
        triggerOnce: false,
        threshold: 0.45
    })
    const { ref: ref2, inView: inView2 } = useInView({
        triggerOnce: false,
        threshold: 0.15
    });

    return (


        <HomePageMain>
            <div className='homeTitle'>

                <HomeTitle />
            </div>
            <DivHomeInfo1 ref={ref1} $isVisible={inView1}>
                <TextHome1 />
                <InfoHome1 />


            </DivHomeInfo1>
            <DivHomeInfo2 ref={ref2} $isVisible={inView2} >
                <TextHome2 />
                <InfoHome2 />


            </DivHomeInfo2>





        </HomePageMain >
    )
}

export default HomePage

const HomePageMain = styled.main`
width: 100%;
height: auto;
margin-top: 20svh;
margin-bottom: 20svh;

justify-content: center;
text-align: center;
align-items: center;



.homeTitle {
   margin-top: 200px;
   margin-bottom: 200px;
    height: 400px;
    font-size: 15svh;
    
}

    

`
const DivHomeInfo1 = styled.div`
margin-bottom: 40svh;
justify-content: center;
align-items: center;
text-align: center;



opacity: 0;
transform: translateY(50px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;

    ${({ $isVisible }) =>
        $isVisible &&
        css`
            opacity: 1;
            transform: translateY(0);
        `}

`
const DivHomeInfo2 = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
opacity: 0;
transform: translateY(50px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;

    ${({ $isVisible }) =>
        $isVisible &&
        css`
            opacity: 1;
            transform: translateY(0);
        `}


`