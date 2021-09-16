import styled from 'styled-components'

export const SidebarStyled = styled.div`
    width: 15rem;
    position: fixed;
    height: 100vh;
    background-color: var(--background-dark-green);
    overflow: hidden;
    transition: all .4s ease-in-out;
    @media screen and (max-width:1200px){
        transform: translateX(-100%);
        width: 12rem;
        z-index: 20;

    }
`