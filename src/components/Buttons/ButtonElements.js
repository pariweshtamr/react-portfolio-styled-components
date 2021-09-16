import styled from 'styled-components'

export const PrimaryButtonStyled =styled.a`
    background-color: var(--border-color);
    padding: .8rem 2.5rem;
    color: var(--font-color-dark);
    cursor: pointer;
    display: inline-block;
    font-size: inherit;
    text-transform: uppercase;
    position: relative;
    &::after{
        content: "";
        position: absolute;
        width: 0%;
        height: 10%;
        background-color: var(--primary-color);
        left: 0;
        bottom: 0;
        transition: all .4s ease;
    }
    &:hover::after{
        width: 100%;

    }
`