import getConfig from "next/config";
import SanityClient from "@sanity/client";
const { publicRuntimeConfig } = getConfig();

export const santiyClient = new SanityClient({
  apiVersion: "2021-10-21",
  dataset: "production",
  projectId: "dcrtcxxm",
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_TOKEN,
});

const getPostAllCntQuery = `
  count([type == "post"])
`;

const getLatestContentQuery = `
  *[_type == "post"] | order(_createdAt)[0..9]
`;

const getAllContentQuery = `
*[_type == 'post'] {
    title,
    body,
    _createdAt,
    _updatedAt,
    _id,
    mainImage,
}
`;

export const getAllContent = async () => {
  return await santiyClient.fetch(getAllContentQuery);
};

export const getLatestContent = async () => {
  return await santiyClient.fetch(getLatestContentQuery);
};

export const getPostAllCnt = async () => {
  return await santiyClient.fetch(getPostAllCntQuery);
};
