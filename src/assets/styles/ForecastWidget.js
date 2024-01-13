import styled from "styled-components";

const Card = styled.div`
  color: white;
  background-color: #fbda9d;
  border-radius: 20px;
  padding: 1rem;
  margin: 1rem 0.6rem;

  @media screen and (min-width: 548px) {
    margin: 0 0.3rem 0.7rem 0.3rem;
    padding: 0.5rem;
    flex-basis: 12%;
    font-size: 0.9rem;
  }
`;

const CardHeader = styled.div`
  background-color: #33adff;
  padding: 1rem;
  text-align: center;
  border-radius: 10px;
  h2 {
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
  }

  img {
    width: 40%;
    margin: 0;
  }

  p {
    font-style: italic;
  }

  #weather-desc {
    font-size: 1.3rem;
    font-weight: bold;

    p:first-child {
      font-size: 1.8rem;
      margin: 0;
    }
  }

  @media screen and (min-width: 548px) {
    padding: 0.2rem 0.1rem;
    h2 {
      font-size: 1rem;
    }

    #weather-desc {
      font-size: 1rem;
      font-weight: bold;

      p:first-child {
        font-size: 1.4rem;
        margin: 0;
      }
    }
  }
`;

const CardBody = styled.div`
  margin-top: 0.6rem;
  background-color: #f76f26;
  border-radius: 10px;
  padding: 0.2rem 1rem;
  p {
    font-style: italic;
  }

  #temp-div,
  #wind-div {
    border-bottom: 2px dashed white;
  }

  @media screen and (min-width: 548px) {
    padding: 0.2rem 0.4rem;
  }
`;

const FlexBox = styled.div`
  @media screen and (min-width: 548px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const CardFooter = styled.div`
  color: #5c200a;
  text-align: center;

  span {
    font-weight: bold;
  }
`;

const SpecialH3 = styled.h3`
  font-size: 2rem;
  margin-top: 2rem;
  margin-bottom: 0.3rem;
  font-weight: bold;
  color: white;
  text-shadow: 1px 2px #0267c1;
  text-align: center;

  @media screen and (min-width: 548px) {
    font-size: 3rem;
    margin-right: 2rem;
    margin-top: 0;
    margin-bottom: 0.3rem;
    font-weight: bold;
    color: white;
    text-shadow: 1px 2px #0267c1;
    text-align: right;
  }
`;

export { Card, CardHeader, CardBody, FlexBox, SpecialH3, CardFooter };
