import styled from 'styled-components';

import Image from '../images/bgimage2.jpg';

export const Wrapper = styled.div`

height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-items: center;
    justify-content: center;
    background-image: url(${Image});
    background-size: 200vh 100vh;

`;