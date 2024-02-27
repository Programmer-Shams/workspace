import React from "react";
import { useQuery } from "react-query";
const Post = () => {
  const { data, isError, isLoading, dataUpdatedAt, refetch } = useQuery({
    queryKey: "users/1",
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/users/1").then((res) =>
        res.json()
      ),
  });
  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>Error...</h2>;
  return (
    <div>
        <h4>{dataUpdatedAt}</h4>
      <h2>{data.name}</h2>
      <h3>{data.email}</h3>
      <button onClick={refetch}>Refetch Post</button>
    </div>
  );
};

export default Post;
