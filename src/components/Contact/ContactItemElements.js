import styled from 'styled-components'

export const ContactItemStyled = styled.div`
    padding: 1.5rem 2rem;
    background-color: var(--background-dark-green);
    display: flex;
    align-items: center;

    &:not(:last-child){
        margin-bottom: 2.5rem;
    }
    .left-content{
        padding: 1rem;
        border: 1px solid var(--border-color);
        font-size: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1.5rem;
        svg{
            font-size: 2.3rem;
            color: var(--font-color-dark);
        }
    }
    .right-content{
        h6{
            color: var(--white);
            font-size: 1.2rem;
            padding-bottom: 0.5rem;
        }
        p{
            padding: .1rem 0;
            color: var(--font-color-dark);
        }
    }
`