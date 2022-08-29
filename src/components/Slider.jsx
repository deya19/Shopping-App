import React from 'react'
import styled from 'styled-components'
import {ArrowLeftOutlined,ArrowRightOutlined} from "@mui/icons-material"
import { useState } from 'react'
import { sliderItems } from '../data'
import { mobile, Tablate } from '../responsive'
import {Link} from "react-router-dom"


const Container = styled.div`
width: 100%;
height:100vh;
display: flex;
position: relative;
overflow: hidden;

${Tablate({display:"none"})}
${mobile({display:"none"})}
`

const Arrow = styled.div`
width: 50px;
height: 50px;
background-color:#f7eeee;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top:0;
bottom:0;
left: ${props => props.direction === "left" && "10px"};
right: ${props => props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
opacity: 0.5;
z-index: 2;
`

const Wrapper = styled.div`
height: 100%;
display: flex;
transform: translateX(${props=>props.currentIndex*-100}vw);
transition: all 1.5s ease-in-out;
`
const Slide = styled.div`
width: 100vw;
height:100vh;
display: flex;
align-items: center;
background-color: #${props=> props.bg};
`
const ImageContainer = styled.div`
height: 100%;
flex: 1;
`
const Image = styled.img`
height: 80%;
`

const InfoContainer = styled.div`
flex: 1;
padding: 50px;
`

const Title = styled.h1`
font-size:70px;
`
const Desc = styled.p`
margin: 50px 0;
font-size: 18px;
font-weight: 500;
letter-spacing: 3px;
`
const Button= styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`


function Slider() {

const [currentIndex , setCurrentIndex] = useState(0)

const goToPrevious = () => {
  const isFirstSlide = currentIndex === 0;
  const newIndex = isFirstSlide ? sliderItems.length - 1 : currentIndex - 1;
  setCurrentIndex(newIndex);
};

const goToNext = () => {
  const isLastSlide = currentIndex === sliderItems.length - 1;
  const newIndex = isLastSlide ? 0 : currentIndex + 1;
  setCurrentIndex(newIndex);
};



  return (
    <Container>
     <Arrow direction="left" onClick={goToPrevious}>
        <ArrowLeftOutlined />
     </Arrow>
     <Wrapper currentIndex={currentIndex}>
      {sliderItems.map(slideritem =>(
           <Slide bg={slideritem.bg} key={slideritem.id}>
      <ImageContainer>
        <Image src={slideritem.img}/>
      </ImageContainer>
      <InfoContainer>
        <Title>{slideritem.title}</Title>
        <Desc>{slideritem.desc}</Desc>
        <Link to="/productList"><Button>SHOW NOW</Button></Link>
      </InfoContainer>
      </Slide>
      ))}
     </Wrapper>
     <Arrow direction="right">
        <ArrowRightOutlined  onClick={goToNext}/>
     </Arrow>
    </Container>
  )
}

export default Slider