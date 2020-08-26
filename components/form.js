import styles from './form.module.css'
// import { TextField, Button } from '@material-ui/core';
import styled from "styled-components";


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

export default function Form() {
  return (
    <div className={styles.form}>
      <h1>
        Register your interest
    </h1>
      <p>We’ll send you updates and news on the It’s Time event</p>
      <form>
        <StyledInput type="text" required />
        <StyledButton> Submit </StyledButton>
      </form>
    </div>
  )
}

