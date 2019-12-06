import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export default function Dashboard(props){

    const ButtonContainer = styled.div`
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
    `;

    return(
        <ButtonContainer>
            <Button variant="contained" onClick={props.hit}>Hit</Button>
            <Button variant="contained" onClick={props.double}>Double!</Button>
            <Button variant="contained" onClick={props.triple}>Triple!!</Button>
            <Button variant="contained" onClick={props.homerun}>Homerun!!</Button>
            <Button  variant="contained" onClick={props.strike}>Strike</Button>
            <Button variant="contained" onClick={props.ball}>Ball</Button>
            <Button  variant="contained" onClick={props.foul}>Foul</Button>
        </ButtonContainer>
    )
}