import styles from './form.module.css';
import React, { useState } from 'react';
import styled from "styled-components";

//components
const StyledButton = styled.button`
  background-color: #F73A54;
  font-family: 'Sofia Pro';
  font-size: 22px;
  font-weight: 700;
  color: #FFFFFF;
  height: 60px;
  width: 153px;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: hidden;
`;

const StyledInput = styled.input`
  background-color: #F2F2F2;
  font-family: 'Sofia Pro';
  font-size: 22px;
  font-weight: 400;
  color: #222222;
  height: 60px;
  width: 401px;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: hidden;
`;

const Form = () => {
  //state
  const [email, setEmail] = useState
    ({
      email: '',
    })


  //handle form
  const handleInputChange = ({ currentTarget: { value } }) => {
    setEmail({ ...email, value })
  }

  //for testing
  console.log(email);

  const handleSubmit = () => {
    //post request to CMS
  }
  return (
    <div className={styles.form}>
      <h1>
        Register your interest
    </h1>
      <p>We’ll send you updates and news on the It’s Time event</p>
      <form>
        <StyledInput type="text" required onChange={handleInputChange} placeholder="Enter your email address" />
        <StyledButton onSubmit={handleSubmit}> Submit </StyledButton>
      </form>
    </div>
  )
}

export default Form;
