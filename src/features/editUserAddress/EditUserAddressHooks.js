import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserAction } from "../../app/userSlice";

export const EditUserAddressHooks = () => {
  const { address, setAddress, user, updateUser } = useUserAddress();

  return (
    <div>
      <h1>Edit user hooks</h1>
      <section>
        <label>Address</label>
        <input
          type="text"
          value={address ?? user.address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <button onClick={updateUser}>Update</button>
      </section>
    </div>
  );
};

const useUserAddress = () => {
  const [address, setAddress] = useState("in there");
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const updateUser = () => {
    dispatch(updateUserAction({ address }));
    setAddress(null);
  };
  return {
    address,
    setAddress,
    user,
    updateUser,
  };
};
