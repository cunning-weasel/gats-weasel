import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const Cards = () => {

    const [ flipped, setFlipped ] = useState(false)

    return (
        <CardsContainer>
            <CardsInner className={flipped ? "flipped" : ""}>
                <CardsFront>
                    <h2>Title</h2>
                    <p>here place for content</p>
                    <button onClick={() => setFlipped(true)}>Flip</button>
                </CardsFront>
                <CardsBack>
                    <h2>Back side title</h2>
                    <p>Place for content</p>
                    <button onClick={() => setFlipped(false)}>Flip</button>
                </CardsBack>
            </CardsInner>
        </CardsContainer>
    )
}

export default Cards

const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    transition: z-index 500ms, transform 500ms;
    z-index: 0;
    -webkit-perspective: 1000px;
    perspective: 1000px;
    transform-style: preserved-3d;

    &flipped {
        z-index: 1;
    }
    `

const CardsSide= css`
    width: 100%;
    min-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    -moz-backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border: 2px solid gray;
    `

const CardsFront = styled.div`
    ${CardsSide}
    z-index: 0;
    background: white;
`
const CardsBack = styled.div`
    ${CardsSide}
    transform: rotateY(-180deg) translate(100%, 0);
    background: xf7f7f7;
    z-index: 1;
    `
const CardsInner = styled.div`
    flex: 1;
    display: flex;
    transition: transform 500ms;transform-style: preserve-3d;

    &flipped {
        transform: rotateY(180deg)
    }
    `
