import React from 'react'
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { Link } from "react-router-dom";

const Edituser = () => {
  return (
    <>
      <Form>
        <FormGroup>
          <Label>Name</Label>
          <Input type="text" placeholder="Enter your name"></Input>
        </FormGroup>
        <Button type="submit">Edit Name</Button>
        <Link to="/" className="btn btn-danger ml-4 mx-2">Cancel</Link>
      </Form>
    </>
  )
}

export default Edituser