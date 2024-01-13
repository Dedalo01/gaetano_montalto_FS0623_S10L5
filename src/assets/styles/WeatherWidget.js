import styled from "styled-components";

const Card = styled.div`
  color: #5c200a;
  background-color: #ef8f6c;
  border-radius: 20px;
  padding: 1rem;
  margin: 0 0.6rem;
  max-width: 321px;

  p {
    margin: 0.3rem 0 0.4rem 0;
  }
`;

const CardHeader = styled.div`
  background-color: #9acffe;
  padding: 1rem;
  text-align: center;
  border-radius: 10px;
  h3 {
    font-size: 2rem;
    margin-bottom: 0;
  }

  img {
    width: 30%;
    margin: 0;
  }
`;

const CardBody = styled.div`
  margin-top: 0.6rem;
  background-color: #f9cb77;
  border-radius: 10px;
  padding: 0.2rem 1rem;
  p {
    font-style: italic;
  }

  #special-temp {
    text-align: center;
    font-weight: bold;
    font-size: 3.5rem;
    text-shadow: 1px 2px 5px wheat;
    background-color: white;
    border-radius: 15px;
    padding: 2rem 0.5rem;
    margin-top: 1.3rem;
    border: 3px solid wheat;
  }

  #details-container {
    h3 {
      border-bottom: 1px solid #black;
      margin: 0 0 0.2rem 0;
    }
  }
`;

const CardFooter = styled.div`
  text-align: center;
  margin-top: 1rem;
`;

const SpecialH3 = styled.h3`
  font-size: 2rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-weight: bold;
  color: white;
  text-shadow: 1px 2px #0267c1;
  text-align: center;

  @media screen and (min-width: 548px) {
    font-size: 3rem;
    margin-top: 0;
    margin-bottom: 0.3rem;
  }
`;

export { Card, CardHeader, CardBody, SpecialH3, CardFooter };
