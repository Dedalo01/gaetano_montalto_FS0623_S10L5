import styled from "styled-components";

const Form = styled.form`
  padding: 1.5rem 1rem 0.8rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  input {
    padding: 0.8rem 1rem 0.8rem 1rem;
    display: block;
    font-size: 1.3rem;
    border: 1px dashed #0075c4;
    border-radius: 20px;
    box-shadow: 0;
    transition: all 0.1s ease-out;

    &:focus {
        outline:  3px solid #0075c4 ;
    }
   
  }

  button {
    color: black;
    font-weight: bold;
    font-size: 1.2rem;
    margin: 1rem;
    padding: 1rem 3rem 1rem 3rem;
    border-radius: 20px;
    background-color: #f9cb77;
    border: 3px solid #efa00b;
    transition: all 0.2s ease-out;
    cursor: pointer;

    &:hover {
      box-shadow: 0 0 15px #d65108;
      background-color: #f9cb60;
    }
  }

  @media screen and (min-width: 548px) {
    padding: 2rem 0.3rem 1.5rem 1rem;

    input {
      padding: 1rem 3rem 1rem 3rem;
    }

    button {
        margin: 0 0 0 0.4rem;
  }
`;

export default Form;
