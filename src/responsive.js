import {css} from "styled-components"


export const mobile = (props) =>{
   return css`
    @media screen and (max-width:480px){
    ${props}
    }
   `
};


export const Tablate = (props) =>{
   return css`
    @media screen and (max-width:768px){
    ${props}
    }
   `
};



