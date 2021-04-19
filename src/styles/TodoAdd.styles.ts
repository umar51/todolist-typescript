import styled from 'styled-components';

export const Form = styled.form`
 button, input {
    font-family:Arial, Helvetica, sans-serif;
    font-weight: 700;
  border-radius: 20px;
  border-color: rgb(172, 185, 113);
  box-shadow: 2px 1px 5px rgb(235, 181, 111);
  margin: 5px;
  height: 5vh;
  cursor: pointer;
 

    
}

 button{
    width: 25vh;
}

 input {
    width: 55vh;
}

 button:hover {
    border-color: yellowgreen;
    border-width: 5px 5px;
    background: linear-gradient(90deg,  rgb(225, 236, 184), rgb(173, 209, 42));
    box-shadow: 10px 10px 10px  rgba(20, 136, 44, 0.472), -10px -10px 5px rgba(109, 216, 95, 0.586); 
    font-size: 1.5rem;
    transition: all 1s;
    transform-style: preserve-3d;
    perspective: 1000px;
    transform: translate3d(2px, 0px, 10px);
    height: 7vh;
    width: 28vh;
}

`