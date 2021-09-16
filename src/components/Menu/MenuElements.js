import styled from 'styled-components'

export const MenuStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
    @media screen and (max-width: 900px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 600px){
        grid-template-columns: repeat(1, 1fr);
    }
    .grid-item{
        .portfolio-content{
            padding: 5px;
            display: block;
            position: relative;
            overflow: hidden;
            cursor: pointer;
            h6{
                margin-top: 1rem;
                font-size: 1.2rem;
                padding: 10px;
                text-align: center;
            }
            .portfolio-image{
                padding: 8px;
                border-radius: 10px;
                background: #1a1a1a;
                border: 1px solid rgba(0,0,0,0.80);
                display: flex;
                img{
                width: 100%; 
                height: 30vh;
                border-radius: 10px;
                } 
            }
        &:hover{
            box-shadow: -2px 2px 2px 2px var(--primary-color);
            border-radius: 10px;
        }      
        }
    }

`