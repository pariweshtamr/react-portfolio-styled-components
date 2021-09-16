import styled from 'styled-components'

export const ServicesCardStyled = styled.div`
background-color: var(--background-dark-green);
margin: 0 0.4rem;
border-left: 1px solid var(--border-color);
border-top: 8px solid var(--border-color);
border-right: 1px solid var(--border-color);
border-bottom: 1px solid var(--border-color);
transition: all 0.4s ease-in-out ;
&:hover{
    border-top: 8px solid var(--primary-color);
    transform: translateY(2px);
}
    .container{
        padding: 1.2rem;
        h4{
            color: var(--primary-color);
            padding: 0.5rem 0;
            font-size: 1.2rem;
            position: relative;
            &::after{
                content: "";
                width: 3rem;
                background-color: var(--border-color);
                height: 3px;
                position: absolute;
                left:0;
                bottom: 0;
                border-radius: 10px;
            }
        }
        p{
            font-size: .8rem;
            padding: .8rem 0;
            color: var(--font-color-dark);
            
        }
    }

`