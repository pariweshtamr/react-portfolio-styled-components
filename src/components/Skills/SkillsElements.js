import styled from 'styled-components'

export const SkillsStyled = styled.section`
.skills{
    text-transform: uppercase;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 3rem;
    grid-row-gap: 2rem;
    @media screen and (max-width:700px){
        grid-template-columns: repeat(1, 1fr);
    }
}
`