import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { api } from "../../app/api";
import { updateUserAction } from "../../app/userSlice";

export const EditUserAddressHooks = () => {
  const [address, setAddress] = useState();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [patchUser, { loading }] = api.user.usePatch({
    onCompleted: (newUser) => {
      dispatch(updateUserAction(newUser));
    },
  });

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
        <button
          onClick={() => {
            patchUser(1, { address });
          }}
        >
          Update
        </button>
      </section>
      {loading && <div className="loading"></div>}
    </div>
  );
};
