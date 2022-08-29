import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import Badge from '@mui/material/Badge';
import {mobile, Tablate} from "../responsive"
import { Link } from 'react-router-dom';


const Container = styled.div`
   height:60px;

   ${Tablate({height:"80px"})}
   ${mobile({height:"50px"})}
`
const Wrapper = styled.div`
   padding:10px 20px;
   display:flex;
   align-items: center;
   justify-content:space-between;

   ${Tablate({padding:"20px 0px"})}
   ${mobile({padding:"10px 0px"})}
`
const Left = styled.div`
flex:1 ;
display: flex;
align-items: center;
`

const Language = styled.span`
font-size: 14px;
cursor: pointer;

${Tablate({display:"none"})}
${mobile({display:"none"})}
`

const SearchContainer = styled.div`
border:0.5px solid lightgray ;
display: flex;
align-items: center;
margin-left: 25px;
padding:5px;

${Tablate({marginRight:"15px"})}
${mobile({marginRight:"15px"})}
`

const Input = styled.input`
border: none;
&:focus{
  outline: none;
}

${Tablate({width:"200px"})}
${mobile({width:"50px"})}
`


const Center = styled.div`
flex:1;
text-align: center;
`

const Logo = styled.h1`
  font-weight: bold;

  ${Tablate({fontSize:"40px"})}
  ${mobile({fontSize:"24px"})}
`

const Right = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;
${Tablate({flex:2,justifyContent:"center"})}
${mobile({flex:2,justifyContent:"center"})}
`

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;

${Tablate({fontSize:"16px",marginLeft:'15px'})}
${mobile({fontSize:"12px",marginLeft:'10px'})}
`
 const NavbarLink = styled(Link)`
 color:#000;
 text-decoration: none;
 font-weight: 500;
 `



function Navbar() {
  return (
    <Container>
      <Wrapper>
       <Left>
        <Language>EN</Language>
        <SearchContainer>
            <Input placeholder='Search'/>
            <Search style={{color:"gray",fontSize:16}}/>
        </SearchContainer>
       </Left>
       <Center><Logo>DEYA'A.</Logo></Center>
       <Right>
        <NavbarLink to="/register"><MenuItem>REGISTER</MenuItem></NavbarLink>
        <NavbarLink to="/login"><MenuItem>SIGN IN</MenuItem></NavbarLink>
        <NavbarLink to="/cart">
        <MenuItem>
        <Badge badgeContent={2} color="secondary">
          < ShoppingCartOutlined/>
        </Badge>
        </MenuItem>
        </NavbarLink>
       </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar