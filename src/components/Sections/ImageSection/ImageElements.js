import styled from 'styled-components'

export const ImageStyled = styled.div`
    display: flex;
    margin-top: 5rem;
    @media screen and (max-width:1000px){
        flex-direction : column ;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        height: 50vh;
        img{
            width: 80%;
            height: 100%;
            object-fit: contain;
        }
    }
    .right-content{
        h4{
            font-size: 2rem;
            color: var(--font-color-dark);
            span{
                font-size: 2rem;
                color: var(--primary-color);
            }
        }
        .paragraph{
                padding: 1rem 0;
                font-size: 1rem;
                color: var(--font-color-dark);
            }
        .about-info{
            display: flex;
            padding-bottom: 1.5rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                    font-size: 1rem;
                    color: var(--font-color-dark);
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                    font-size: 1rem;
                    color: var(--font-color-dark);
                }
            }
        }
    }
`