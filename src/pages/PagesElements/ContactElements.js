import styled from 'styled-components'

export const ContactStyled = styled.section`
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        @media screen and (max-width:978px){
            grid-template-columns: repeat(1, 1fr);
            .f-button{
                margin-bottom: 3rem;
            }
        }
        .right-content{
            display: flex;
            flex-direction: column;
            @media screen and (max-width: 550px){
                width: 80%;
            }
        }
        .contact-title{
            h4{
                color: var(--white);
                padding: 1rem 0;
                font-size: 1.8rem;
            }
        }
        .form{
            width: 100%;
            @media screen and (max-width: 550px){
                width: 80%;
            }
            .form-field{
                margin-top: 2rem;
                position: relative;
                width: 100%;
                label{
                    position: absolute;
                    left: 20px;
                    top: -20px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding: 0 0.5rem;
                    color: var(--primary-color);
                }
                input{
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 40px;
                    padding: 0 15px;
                    width: 100%;
                    color: var(--font-color-dark);
                }
                textarea{
                    background: transparent;
                    border: 1px solid var(--border-color);
                    outline: none;
                    width: 100%;
                    color: white;
                    padding: .8rem 1rem;
                }
            }
        }
    }
`