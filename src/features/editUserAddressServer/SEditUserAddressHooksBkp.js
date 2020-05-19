import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserAction } from "../../app/userSlice";
import { api } from "../../app/api";

export const EditUserAddressHooks = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [address, setAddress] = useState(null);
  const [patchUser, { loading }] = api.user.usePatch({
    onCompleted: (user) => {
      dispatch(updateUserAction(user));
      setAddress(null);
    },
  });

  return (
    <div>
      <h1>Edit user (hooks)</h1>
      <section>
        <label>Address</label>
        <input
          type="text"
          value={address ?? user.address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button onClick={() => patchUser(1, { address })}>Update</button>
      </section>
      {loading && <div className="loading"></div>}
    </div>
  );
};
