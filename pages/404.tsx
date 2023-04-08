import { NextPage } from "next";
import { useRouter } from "next/router";

const NotFoundPage = () => {
  const router = useRouter();
  return (
    <>
      Status: 404 <br />
      <button onClick={() => router.replace("/")}>Back Home</button>
    </>
  );
};
export default NotFoundPage;
