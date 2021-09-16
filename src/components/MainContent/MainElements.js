import styled from 'styled-components'

export const MainStyled = styled.header`
width: 100%;
height: 100vh;
position: relative;
.typography{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;
    z-index:10;
    h1{
        font-size: 2.5rem;
        color: var(--font-color-dark);
        @media screen and (max-width:520px){
                font-size: 2rem;
            }
        span{
            font-size: inherit;
            @media screen and (max-width:520px){
                font-size: 2rem;
            }
            color: var(--primary-color-light);
        }
    }
    p{
        font-size: 1rem;
        color: var(--font-color-dark);
        @media screen and (max-width:520px){
                font-size: 0.6rem;
            }
    }
}
.icons{
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    .icon{
        border: 2px solid var(--border-color);
        color: var(--white);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: .5rem;
        border-radius: 50%;
        transition: all .4s ease-in-out;
        cursor: pointer;
        &:not(:last-child){
            margin-right: 1rem;
        }
    }
    .i-fb{
        &:hover{
            border: 2px solid #3b5998;
            color: #3b5998;
        }
    }
    .i-link{
        &:hover{
            border: 2px solid #3b5998;
            color: #3b5998;
        }
    }
    .i-twitter{
        &:hover{
            border: 2px solid #1da1f2;
            color: #1da1f2;
        }
    }
    .i-github{
        &:hover{
            border: 2px solid #000;
            color: #fff;
        }
    }
    .i-ig{
        &:hover{
            border: 2px solid red;
            color:  red;
        }
    }
}
`
