import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin:0px;
    padding:0px;
    box-sizing:border-box;
}

body{
    background-color: ${(props) => props.theme.colors.black[1]} ;
    font-family: ${(props) => props.theme.fonts.primary}, sans-serif;
    color: ${(props) => props.theme.colors.white};
   
}



@media (max-width: 1080px){
    html{
        font-size: 93.75%;
    }
}

@media (max-width: 720px){
    html{
        font-size: 87.5%;
    }
}

@media (max-width: 600px){
    body{
        min-width: 600px
    }
}

h1,h2,h3,h4,h5,h6{
    font-weight: ${(props) => props.theme.fontSize.bold};
    font-family: ${(props) => props.theme.fonts.primary}, sans-serif;
    color: ${(props) => props.theme.colors.white};
}

`;
