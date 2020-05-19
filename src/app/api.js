import { useState } from "react";

let backendUser = {
  name: "Maxence",
  address: "12 Rue du Cheval",
};

const patch = async (path, data) => {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      backendUser = { ...backendUser, ...data };
      resolve(backendUser);
    }, 1000);
  });
};

export const user = {
  usePatch: ({ onCompleted }) => {
    const [loading, setLoading] = useState(false);

    return [
      (id, data) => {
        console.log(1);
        setLoading(true);
        patch("", data).then((data) => {
          setLoading(false);
          onCompleted(data);
        });
      },
      { loading, error: false },
    ];
  },
};

export const api = {
  patch,
  user,
};
