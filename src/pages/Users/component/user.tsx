import React, { useEffect, useState } from "react";
import Loader from "../../../components/Loader";
import InputForm from "../../../components/Form";

const User = (props: any) => {
  const [name, setName] = useState("");
  const [rows, setRows] = useState([]);
  const [loader, setLoader] = useState(false);
  const { loading_users, getAllUsers, userList } = props;

  useEffect(() => {
    getAllUsers();
  }, []);

  useEffect(() => {
    setRows(userList);
  }, [userList]);

  useEffect(() => {
    const isLoading = loading_users;
    setLoader(isLoading);
  }, [loading_users]);

  const handleAdd = () => {
    const data = {
      name: { name }
    };
    // createUser(data)
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event?.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      {loader && <Loader />}
      {rows.length > 0 ? (
        <ul>
          {rows.map((ele: any) => {
            return <li key={ele._id}>{ele.name}</li>;
          })}
        </ul>
      ) : (
        <h3>No Records</h3>
      )}
      <InputForm />
    </>
  );
};

export default User;
