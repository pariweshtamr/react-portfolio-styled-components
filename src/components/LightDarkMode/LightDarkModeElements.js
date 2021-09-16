import styled from 'styled-components'

export const LightDarkModeStyled = styled.div`
// Floating toggler
.light-dark-mode{
    position: fixed;
    right: 0;
    top: 45%;
    background-color: var(--background-dark-green);
    opacity: 0.8;
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
`