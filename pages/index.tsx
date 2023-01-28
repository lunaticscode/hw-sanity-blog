import { getAllContent } from "@/utils/sanityClient";
import { NextPage } from "next";
import { useEffect } from "react";

const HomePage: NextPage = () => {
  const testFetch = async () => {
    const result = await getAllContent();
    console.log(result);
  };
  useEffect(() => {
    testFetch();
  }, []);
  return <></>;
};
export default HomePage;
