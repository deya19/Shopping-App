import { Add, Remove } from '@mui/icons-material'
import React, { useState } from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { mobile, Tablate } from '../responsive'
import {Link} from "react-router-dom"

const Container = styled.div``

const Wrapper = styled.div`
padding: 20px;

${mobile({padding:"10px"})}
`

const Title = styled.h1`
font-weight: 300;
text-align: center;
`

const Top  = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type==="filled" && "none"};
    background-color: ${props=>props.type==="filled"? "black" : "transparent"};
    color: #${props=>props.type==="filled" && "fff"};
`

const TopTexts = styled.div`

${mobile({display:"none"})}
`

const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`

const Bottom = styled.div`
display: flex;
justify-content: space-between;

${mobile({flexDirection:"column"})}
`

const Info = styled.div`
flex: 3;
`
const Product = styled.div`
display: flex;
justify-content: space-between;

${mobile({flexDirection:"column"})}
`


const ProductDetails = styled.div`
flex:2;
display: flex;
`

const Image = styled.img`
width: 200px;
`

const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`

const ProductName = styled.span`

${Tablate({marginBottom:"20px"})}
`

const ProductId = styled.span`

${Tablate({marginBottom:"20px"})}
`

const ProductColor = styled.div`
width: 20px;
height:20px;
border-radius: 50%;
background-color: ${props=>props.color};

${Tablate({marginBottom:"20px"})}
`

const ProductSize = styled.span`

${Tablate({marginBottom:"20px"})}
`

const PriceDetails = styled.span`
flex:1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const ProductAmmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`

const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;

${mobile({margin:"5px 15px"})}
`

const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;

${mobile({marginBottom:"20px"})}
`
const Hr = styled.hr`
background-color: #eee;
border: none;
height: 1px;
`

const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 55vh;

${Tablate({height:"40vh"})}
`
const SummaryTitle = styled.h1`
font-weight: 200;
`


const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type === "total" && "500"} ;
font-size: ${props=>props.type === "total" && "24px"} ;
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const SummaryButton = styled.button`
width: 100%;
padding: 10px;
background-color: #000;
color: #fff;
font-weight: 600;
`
    



function Cart() {
    const [product1,setProduct1] = useState(1);
    const [product2,setproduct2]= useState(1);
   
    let totPrice1;
    let totPrice2; 

   const handleNumber = (opration,id)=>{
    if(id === "1"){
     if(opration === "+"){
        setProduct1(product1+1)
     }else if(opration === "-" && product1>1){
        setProduct1(product1-1)
     }


    }else if(id ==="2"){
        if(opration === "+"){
            setproduct2(product2+1)
         }else if(opration === "-" && product2>1){
            setproduct2(product2-1)
         }  

    
    }
   }

   totPrice1=product1*30;
   totPrice2=product2*20;

  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
               <Link to="/productList"><TopButton>CONTINUE SHOPPING</TopButton></Link>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type='filled'>CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>


                <Info>
                    <Product>
                        <ProductDetails>
                            <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"/>
                             <Details>
                                <ProductName><b>Product:</b> JESSIE THUNDER SHOES</ProductName>
                                <ProductId><b>ID:</b> 93813718293</ProductId>
                                <ProductColor color='black'/>
                                <ProductSize><b>Size:</b> 37.5</ProductSize>
                             </Details>
                        </ProductDetails>
                        <PriceDetails>
                         <ProductAmmountContainer>
                            <Add onClick={()=>handleNumber("+", "1")}/>
                            <ProductAmount>{product1}</ProductAmount>
                            <Remove onClick={()=>handleNumber("-", "1")}/>
                         </ProductAmmountContainer>
                         <ProductPrice>$ {totPrice1}</ProductPrice>
                        </PriceDetails>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetails>
                            <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"/>
                             <Details>
                                <ProductName><b>Product:</b> HAKUR T-SHIRT</ProductName>
                                <ProductId><b>ID:</b> 93813718293</ProductId>
                                <ProductColor color='gray'/>
                                <ProductSize><b>Size:</b> Medium</ProductSize>
                             </Details>
                        </ProductDetails>
                        <PriceDetails>
                         <ProductAmmountContainer>
                            <Add onClick={()=>handleNumber("+", "2")}/>
                            <ProductAmount>{product2}</ProductAmount>
                            <Remove onClick={()=>handleNumber("-", "2")}/>
                         </ProductAmmountContainer>
                         <ProductPrice>$ {totPrice2}</ProductPrice>
                        </PriceDetails>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ {totPrice1+totPrice2}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>$ {totPrice1+totPrice2}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryButton>CHECHOUT NOW</SummaryButton>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart