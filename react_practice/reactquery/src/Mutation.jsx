import React from "react";
import { useMutation } from "react-query";

export const Mutation = () => {
  const { mutateAsync, isLoading, isError, error } = useMutation(
    (newUserData) =>
      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify(newUserData),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json()),
    {
      onSuccess: () => console.log("user created successfully"),
      onError: () => console.log("user not created"),
    }
  );
  const createUser = () => {
    mutateAsync({ name: "Shams" });
  };
  return (
    <div>
      <button onClick={createUser} disabled={isLoading}>
        {isLoading ? "Creating User..." : ""}
        Create User
        <h4>{isError ? error.message : ""}</h4>
      </button>
    </div>
  );
};
