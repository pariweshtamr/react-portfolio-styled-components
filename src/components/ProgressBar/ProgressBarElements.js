import styled from 'styled-components'

export const ProgressBarStyled = styled.div`
    .progress-bar{
        display: flex;
        align-items: center;
        p{
            padding-right: 1.2rem;
            color: var(--font-color-dark);
        }
        .progress{
            position: relative;
            width: 100%;
            height: 0.4rem;
            background: var(--border-color);
            span{
                background: var(--primary-color);
                position: absolute;
                left: 0;
                bottom: 0;
                height: 100%;
            }
        }
    }
`