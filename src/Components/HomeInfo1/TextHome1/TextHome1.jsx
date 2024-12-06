import React from 'react'
import styled from 'styled-components'

const TextHome1 = () => {
    return (
        <DivTextHome>
            <h2>+ DE 100 MODELOS DE RELOJES</h2>
            <p>Con tus marcas favoritas.</p>
        </DivTextHome>
    )
}

export default TextHome1

const DivTextHome = styled.div`
color:white;
width: 100%;

    h2{
        font-size: 50px;
    }
    p{
        font-size: 20px;

    }

`