import React from 'react'
import styled from 'styled-components'
import {Send} from "@mui/icons-material"
import { mobile, Tablate } from '../responsive'


const Container = styled.div`
height: 60vh;
background-color: #fcf5f5;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Title = styled.h1`
font-size: 70px;
margin-bottom: 20px;

${Tablate({fontSize:"80px"})}
`
const Description = styled.div`
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;

${Tablate({textAlign:"center",fontSize:"30px"})}
${mobile({textAlign:"center"})}
`
const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: #fff;
display: flex;
justify-content: space-between;
border: 1px solid lightgray;

${Tablate({width:"75%"})}
${mobile({width:"90%"})}
`
const Input = styled.input`
border:none;
flex:8;
padding-left: 20px;

&:focus{
outline:none;
}

`
const Button = styled.button`
flex: 1;
border: none;
background-color: teal;
color:#fff;
display: flex;
align-items: center;
justify-content: center;
`



function Newsletter() {
  return (
    <Container>
       <Title>Newsletter</Title>
       <Description>Get timely update from favorite products.</Description>
       <InputContainer>
       <Input placeholder='Your email'/>
       <Button>
        <Send/>
       </Button>
       </InputContainer>
    </Container>
  )
}

export default Newsletter