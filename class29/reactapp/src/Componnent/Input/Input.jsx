import React, { useEffect, useState } from "react";
import axios from "axios";
// get form data
const Input = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    cell: "",
    uName: "",
    gender: "",
    photo: "",
  });

  let { name, email, cell, uName, gender, photo } = form;

  // alert management
  const [alert, setAlert] = useState({
    msg: "I form alert",
    type: "danger",
    status: false,
  });

  // alert closing
  const handleAlertClose = () => {
    setAlert({
      msg: "",
      type: "",
      status: false,
    });
  };
  // handle delete data

  const handleDeleteData = (id) => {
    axios.delete("http://localhost:5050/users/" + id);
  };
  // set state for get user
  const [user, setUser] = useState([]);

  // get data from json
  useEffect(() => {
    axios
      .get("http://localhost:5050/users")
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => console.log("error"));
  }, [user]);
  //   form submit
  const handleFromSubmit = (e) => {
    e.preventDefault();
    if (
      name === "" ||
      email === "" ||
      cell === "" ||
      uName === "" ||
      photo === ""
    ) {
      setAlert({
        msg: "All Field are require!",
        type: "danger",
        status: true,
      });
    } else {
      axios
        .post("http://localhost:5050/users", {
          name: name,
          email: email,
          cell: cell,
          photo: photo,
          gender: gender,
          uName: uName,
        })
        .then((res) => {
          setAlert({
            msg: "Data Stable!",
            type: "success",
            status: true,
          });
          setForm({
            name: "",
            email: "",
            cell: "",
            uName: "",
            photo: "",
          });
        });
    }
  };

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-4 m-auto">
            <div className="card shadow">
              <div className="card-header">
                <h2>New User From</h2>
              </div>
              <div className="card-body">
                <div className="msg">
                  {alert.status && (
                    <p
                      className={`alert alert-${alert.type} d-flex justify-content-between`}
                    >
                      {alert.msg}
                      <button
                        className="btn-close"
                        onClick={handleAlertClose}
                      ></button>
                    </p>
                  )}
                </div>
                <form action="" onSubmit={handleFromSubmit}>
                  <div className="my-3">
                    <label htmlFor="">Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="form-control"
                    />
                  </div>
                  <div className="my-3">
                    <label htmlFor="">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      value={email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="my-3">
                    <label htmlFor="">Cell</label>
                    <input
                      type="text"
                      className="form-control"
                      value={cell}
                      onChange={(e) =>
                        setForm({ ...form, cell: e.target.value })
                      }
                    />
                  </div>
                  <div className="my-3">
                    <label htmlFor="">User Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={uName}
                      onChange={(e) =>
                        setForm({ ...form, uName: e.target.value })
                      }
                    />
                  </div>
                  <div className="my-3">
                    <label htmlFor="">Photo</label>
                    <input
                      type="text"
                      className="form-control"
                      value={photo}
                      onChange={(e) =>
                        setForm({ ...form, photo: e.target.value })
                      }
                    />
                  </div>
                  <div className="my-3">
                    <input
                      type="radio"
                      id="male"
                      value="male"
                      name="gender"
                      onChange={(e) =>
                        setForm({ ...form, gender: e.target.value })
                      }
                    />
                    <label htmlFor="male">Male</label>
                    <input
                      type="radio"
                      id="female"
                      value="female"
                      name="gender"
                      onChange={(e) =>
                        setForm({ ...form, gender: e.target.value })
                      }
                    />
                    <label htmlFor="female">Female</label>
                  </div>
                  <div className="my-3">
                    <input
                      type="submit"
                      value="Submit"
                      className="btn btn-info"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <div className="table table-striped">
                  <thead>
                    <tr>
                      <th>Index</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Cell</th>
                      <th>User name</th>
                      <th>Gender</th>
                      <th>Photo</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {user.map((data, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.cell}</td>
                        <td>{data.uName}</td>
                        <td>{data.gender}</td>
                        <td>
                          <img
                            style={{
                              width: "40px",
                              height: "40px",
                              objectFit: "cover",
                            }}
                            src={data.photo}
                            alt=""
                          />
                        </td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => handleDeleteData(data.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Input;
