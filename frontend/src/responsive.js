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
        @media only screen and (min-width: 1400px){
            ${props}
        }
    `;
}



export const HorizontalView = (props) => {
    return css`
        @media only screen and (max-height: 500px) and (max-height: 767px){
            ${props}
        }
    `;
}