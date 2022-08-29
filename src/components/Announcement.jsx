import React from 'react'
import styled from 'styled-components'
import { mobile, Tablate} from '../responsive'

const Container = styled.div`
height: 30px;
background-color:teal;
color:#fff;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;

${Tablate({width:"100%"})}
${mobile({width:"100%"})}
`





function Announcement() {
  return (
    <Container>
      Super Deal! Free Shipping on Orders Over $50
    </Container>
  )
}

export default Announcement