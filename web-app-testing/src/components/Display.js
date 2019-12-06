import React from 'react';
import styled from 'styled-components';

export default function Display(props) {
    const FlexDiv = styled.div`
        
        display: flex;
        justify-content: space-evenly;
        border: 1px solid black;
        margin: 3%;
    `;

    return (
        <>
        <FlexDiv>
            <div>
                <h1>Strikes: {props.strikes} </h1>
            </div>
            <div>
                <h1>Balls: {props.balls} </h1>
            </div>
            <div>
                <h1>Score: {props.score}</h1>
            </div>
        </FlexDiv>
        <FlexDiv>
            <div>
                <h2>Someone On Base One: {props.someoneOnBaseOne} </h2>
            </div>
            <div>
                <h2>Someone On Base Two: {props.someoneOnBaseTwo} </h2>
            </div>
            <div>
                <h2>Someone On Base Three: {props.someoneOnBaseThree} </h2>
            </div>
        </FlexDiv>
        </>
    )
}