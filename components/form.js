import { TextField, Button } from '@material-ui/core';

export default function Form({ dateString }) {
  return (
    <>
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
    </>
  )
}