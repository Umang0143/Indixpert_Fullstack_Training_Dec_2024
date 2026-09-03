import React from "react";
const finishedIcon = "https://img.icons8.com/?size=32&id=cL95UuXTO0nU&format=png";
const pendingIcon = "https://img.icons8.com/?size=60&id=78597&format=png";

const ToDoList = () => {
  return (    
    <div>
      <div className="card shadow-sm p-3">
        <h4 className="card-title text-start mb-3">Todo List</h4>

        <div className="input-group mb-3 ">
          <input
            type="text"
            className="form-control"
            placeholder="Enter list item name"
          />
          <button className="btn btn-primary">Add Todo Item</button>
        </div>

        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img
                src={finishedIcon}
                alt="finished"
                width="20"
                className="me-2"
              />
              <del>Learn HTML, CSS and JavaScript</del>
            </div>
            <button className="btn btn-outline-danger btn-sm">Remove</button>
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img
                src={pendingIcon}
                alt="pending"
                width="20"
                className="me-2"
              />
              Learn React
            </div>
            <button className="btn btn-outline-danger btn-sm">Remove</button>
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img
                src={pendingIcon}
                alt="pending"
                width="20"
                className="me-2"
              />
              Create Projects
            </div>
            <button className="btn btn-outline-danger btn-sm">Remove</button>
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img
                src={pendingIcon}
                alt="pending"
                width="20"
                className="me-2"
              />
              Upload on Github
            </div>
            <button className="btn btn-outline-danger btn-sm">Remove</button>
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img
                src={pendingIcon}
                alt="pending"
                width="20"
                className="me-2"
              />
              Create Portfolio Website
            </div>
            <button className="btn btn-outline-danger btn-sm">Remove</button>
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img
                src={pendingIcon}
                alt="pending"
                width="20"
                className="me-2"
              />
              Create Resume
            </div>
            <button className="btn btn-outline-danger btn-sm">Remove</button>
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img
                src={pendingIcon}
                alt="pending"
                width="20"
                className="me-2"
              />
              Apply for Job
            </div>
            <button className="btn btn-outline-danger btn-sm">Remove</button>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
