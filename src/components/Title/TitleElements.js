import styled from 'styled-components'

export const TitleStyled = styled.div`
    position: relative;
    h2{
        color: var(--white);
        font-size: 3rem;
        font-weight: 600;
        text-transform: uppercase;
        position: relative;
        padding-bottom: 0.2rem;
        @media screen and (max-width:620px){
            font-size: 2rem;
        }
        @media screen and (max-width:490px){
            font-size: 1.5rem;
        }
        &::before{
            content: "";
            position: absolute;
            bottom: 0;
            width: 7.5rem;
            height: 0.35rem;
            background-color: var(--background-dark-green);
            border-radius: 15px;
        }
        &::after{
            content: "";
            position: absolute;
            bottom: 0;
            width: 3.5rem;
            height: 0.35rem;
            background-color: var(--primary-color);
            border-radius: 15px;
            left: 0;
        }
        span{
            font-weight: 900;
            font-size: 5rem;
            color: #103f3970;
            position: absolute;
            left: 0;
            top: 20%;
            z-index: -1;
            @media screen and (max-width: 620px){
                font-size: 4rem;
            }
            @media screen and (max-width:490px){
                font-size: 3rem;
            }
        }
    }

`