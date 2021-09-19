import styled from 'styled-components'

export const TimelineContentStyled = styled.div`
    display: flex;
    margin-bottom: 2rem;
    .left-content{
        padding-left: 20px;
        width: 30%;
        position: relative;
        &::before{
            content: "";
            position: absolute;
            top: 10px;
            left: -9px;
            height: 12px;
            width: 12px;
            border-radius: 50%;
            border: 2px solid var(--border-color);
            background: var(--border-color);
        }
        p{
            display: inline-block;
            font-size: 1rem;
            color: var(--font-color-dark);
            @media screen and (max-width:850px){
            font-size: 12px;
            }
        }
    }
    .right-content{
        padding-left: 4.5rem;
        width: 70%;
        position: relative;
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 15px;
            width: 2.5rem;
            height:2px;
            background: var(--border-color);
            @media screen and (max-width:850px){
            width:1rem;
            }
        }
        h5{
            color: var(--primary-color);
            font-size: 1.2rem;
            padding-bottom: 0.4rem;
        }
        h6{
            padding-bottom: 0.6rem;
            font-size: 1rem;
        }
        p{
            font-size: 0.9rem;
            color: var(--font-color-dark);
            margin-bottom: 1rem;
        }
    }
`