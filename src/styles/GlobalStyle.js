import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Nunito', sans-serif;
    font-size: 1.2rem;
}
body{
    background:var(--background-dark-color);
    color: var(--background-light-color);
}
body::-webkit-scrollbar{
    width: 9px;
    background-color: #383838;
}
body::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background-color: #6b6b6b;
}
body::-webkit-scrollbar-track{
    border-radius: 10px;
    background-color: #383838;
}
a{
    font-family: inherit;
    color: inherit;
    font-size: 1rem;
}
h6{
    color: var(--white);
    font-size: 1.2rem;
    padding-bottom: 0.6rem;
}
.light-dark-mode{
    position: fixed;
    right: 0;
    top: 10%;
    background-color: var(--background-dark-green);
    width: 6.5rem;
    height: 2.5rem;
    z-index: 15;
    display: flex;
    align-items: center;
    justify-content: center;
    svg{
        display: flex;
        align-items: center;
        color: var(--white);
    }
    span{
        color: var(--border-color);
    }

}
.light-theme{
    --primary-color: #d9b08c;
    --primary-color-light: #ffcb9a;
    --background-dark-color: #f0f0f0;
    --background-dark-green:#e4e4e4;
    --border-color: #cbced8;
    --background-light-color: #d1e8e2;
    --background-light-color-2: rgba(3,127,255,.3);
    --white:#151515;
    --font-color-dark:#151515;
}
.dark-theme{
    --primary-color: #d9b08c;
    --primary-color-light: #ffcb9a;
    --background-dark-color: #0d0d0d;
    --background-dark-green:#2c3531;
    --border-color:#116466;
    --background-light-color: #d1e8e2;
    --background-light-color-2: rgba(3,127,255,.3);
    --white:#fff;
    --font-color-dark:#d1e8e2;
}
//Nav Toggler
.hamburger-menu{
        position: absolute;
        right: 5%;
        top: 5%;
        display: none;
        cursor: pointer;
        z-index: 20;
        svg{
            font-size: 2rem;
            color: var(--font-color-dark)
        }
}
.nav-toggle{
    transform: translateX(0);
    z-index: 20;
}
@media screen and (max-width:1200px){
    .hamburger-menu{
    display: block;
    }
}

//Global Media Queries
`
export default GlobalStyle