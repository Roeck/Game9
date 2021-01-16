import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    html{
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgrey;
        }
        &::-webkit-scrollbar-track {
    background: white;
  }
    }
    body {
        font-family: 'Montserrat', sans-serif;
        width: 100%;
        background-color: #dbdbdb;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg fill-opacity='0.79'%3E%3Cpolygon fill='%23d1d1d1' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%23c7c7c7' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%23bebebe' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%23b4b4b4' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%23aaaaaa' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
        background-attachment: fixed;
        background-size: cover;

   
    h2 { 
        color: #A4A4A4;
        font-size: 3rem;
        font-family: 'Kufam', cursive;
        font-weight: lighter;
    }

    h3{
        font-size: 1.3rem;
        color: #333;
        padding: 1.5rem 0rem;
    }

    p {
        font-size: 1.2rem;
        line-height: 200%;
        color: #696969;
    }

    a {
        text-decoration: none;
        color: #333;
    }

    img {
        display: block;
    }

    input {
        font-weight: bold;
        font-family: "Montserrat", sans-serif;
    }
`;

export default GlobalStyles;
