import styled from "styled-components";

export const PortfolioButtonStyled = styled.button`
outline: none;
border: none;
background-color: var(--border-color);
padding: 0.5rem 2rem;
font-size: 1rem;
color: var(--font-color-dark);
cursor: pointer;
transition: all 0.4s ease-in-out;
margin-bottom: .5rem;
&:active, &:focus{
    background-color: var(--primary-color);
}
&:hover{
    background-color: var(--primary-color);
}
&:not(:last-child){
    margin-right: .5rem;
}
`

export const ButtonsStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin: 2rem auto;
`