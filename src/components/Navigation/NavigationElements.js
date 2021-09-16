import styled from 'styled-components'

export const NavigationStyled = styled.nav`
display: flex;
justify-content: space-between;
flex-flow: column wrap;
align-items: center;
height: 100%;
width: 100%;
border-right: 1px solid var(--border-color);

.avatar{
    width: 95%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 1rem 0;
    img{
        width: 70%;
        border-radius: 50%;
        border: 8px solid var(--border-color);
    }
}
.nav-items{
    width: 100%;
    text-align: center;
    .active-class{
        background-color: var(--border-color);
    }
    li{
        /* display: block; */
        a{
            display: block;
            padding: .45rem 0;
            position: relative;
            font-weight: 600;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: var(--font-color-dark);
            &:hover{
                cursor: pointer;
            }
            &::before{
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                width: 0;
                height: 50%;
                background-color:var(--border-color);
                transition: All 0.4s cubic-bezier(1, -0.2, .25, .95);
                opacity: 0.2;
            }
        }
        a:hover::before{
            width: 100%;
            height: 100%;
        }
    }
}
footer{
    border-top: 1px solid var(--border-color);
    width: 95%;
    p{
        padding: 1.5rem 0;
        font-size: 1rem;
        display: block;
        text-align: center;
        color: var(--font-color-dark);
    }
}
`