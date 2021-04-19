import styled from 'styled-components';

export const ListItem = styled.li`
     margin: 10px ;
    font-family: Georgia, 'Times New Roman', Times, serif;

    input{
        margin-right: 1rem;
    }

    :hover {
    background: rgba(41, 120, 224, 0.6);
    border-radius: 0px 10px;
    width: 50vh;
    transform-style: preserve-3d;
    perspective: 100px;
    transform: translate3d(10px, 1px, 10px);
    transition: all 0.75s;

}
`;