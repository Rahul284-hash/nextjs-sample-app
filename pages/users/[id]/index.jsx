import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const UserDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(id ? `https://dummyjson.com/users/${id}` : null, fetcher);

  if (error) {
    return <h1>An error occurred while fetching user details.</h1>;
  }

  if (!data) {
    return <h1>Loading user details...</h1>;
  }

  return (
    <div>
      <h1>{data.firstName} {data.lastName}</h1>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>
      <p>Age: {data.age}</p>
      <p>Address: {data.address.city}, {data.address.state}</p>
    </div>
  );
};

export default UserDetails;
