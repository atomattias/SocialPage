import React, {  useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// call two methods one is for  Get All
// second method is for deleting a contact. Delete method

const UserListing = () => {
    const [contdata, contdatachange] = useState(null);
    const navigate = useNavigate();
    window.location = "/"

    const Removefunction = (id) => {
        if (window.confirm("Do you really want to delete?")) {
            // delete endpoint one method
            fetch("https://localhost:7096/api/User/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Deleted successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }

    const LoadEdit = (id) => {
        navigate('/user/edit/' + id);
    }
    // get all endpoint method
    useEffect(() => {
        fetch("https://localhost:7096/api/User").then((res) => {
            return res.json();
        }).then((resp) => {
            contdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    return (
        <div>
            <div>
                <h2>Friends List</h2>
            </div>
            <div>
                <div>
                    <Link to="/user/create" style={{ color: "blue" }}>Add New (+)</Link>
                </div>
                <br />
                <table>
                    <thead >
                        <tr>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Phone</td>
                            <td>Address</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {contdata &&
                            contdata.map(item => (
                                <tr key={item.id}>
                                    <td>{item.fullName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.address}</td>
                                    <td><a style={{ color: "blue" }} onClick={() => { LoadEdit(item.id) }}>Edit  </a>/
                                        <a style={{ color: "red" }} onClick={() => { Removefunction(item.id) }}>  Delete</a>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UserListing;