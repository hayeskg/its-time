import styles from './form.module.css'
import { TextField, Button } from '@material-ui/core';

export default function Form() {
  return (
    <div className={styles.form}>
      <h1>
        Register your interest
    </h1>
      <p>We’ll send you updates and news on the It’s Time event</p>
      <form>
        <TextField id="outlined-basic" label="Enter your email address" variant="outlined" />
        <Button variant="contained" color="secondary">
          Submit
</Button>
      </form>
    </div>
  )
}