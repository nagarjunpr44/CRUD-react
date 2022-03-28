import React from "react";
import { Link } from "react-router-dom";
import { Button, ListGroup, ListGroupItem } from "reactstrap";

const Userlist = () => {
  return (
    <>
      <ListGroup className="mt-4">
        <ListGroupItem className="d-flex justify-content-between">
          <h3>User one</h3>
          <div className="ml-auto">
            <Link className="btn btn-warning m-1" to="edit/1">Edit</Link>
            <Button color="danger m-1">Delete</Button>
          </div>
        </ListGroupItem>
        <ListGroupItem className="d-flex justify-content-between">
          <h3>User Two</h3>
          <div className="ml-auto">
            <Link className="btn btn-warning m-1" to="edit/1">Edit</Link>
            <Button color="danger m-1">Delete</Button>
          </div>
        </ListGroupItem>
      </ListGroup>
    </>
  );
};

export default Userlist;
