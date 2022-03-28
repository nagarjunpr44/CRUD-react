import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const Adduser = () => {
  return (
    <>
      <Form>
        <FormGroup>
          <Label>Name</Label>
          <Input type="text" placeholder="Enter your name"></Input>
        </FormGroup>
        <Button type="submit">Submit</Button>
        <Link to="/" className="btn btn-danger ml-4 mx-2">Cancel</Link>
      </Form>
    </>
  );
};

export default Adduser;
