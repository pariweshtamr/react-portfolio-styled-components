import styled from 'styled-components'

export const ServicesStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: flex;
        justify-content: space-between;
        @media screen and (max-width:1000px){
            flex-direction: column;
            margin: 5rem 0;
            .mid-card{
                margin: 2rem 0;
            }
        }
    }
`
