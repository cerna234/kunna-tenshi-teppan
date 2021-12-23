import {css} from "styled-components"


export const mobile = (props) => {
    return css`
        @media only screen and (min-width: 768px){
            ${props}
        }
    `;
}



export const mobile1000 = (props) => {
    return css`
        @media only screen and (min-width: 1000px){
            ${props}
        }
    `;
}



export const mobile1400 = (props) => {
    return css`
        @media only screen and (min-width: 1000px){
            ${props}
        }
    `;
}