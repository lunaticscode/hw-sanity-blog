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

const getPostAllCntQuery = `count(*[_type == "post"])`;

const getLatestContentQuery = `
  *[_type == "post"] | order(_createdAt)[0..9]
`;
/**
 * 
     title,
    body,
    _createdAt,
    _updatedAt,
    _id,
    "mainImageUrl": mainImage.asset->url
 */
const getPostListQuery = (page: number, devider: number = 10) => `
*[_type == 'post'] | order(_createdAt desc) {
    title,
    tags,
    _createdAt,
    _id,
    "mainImageUrl": mainImage.asset->url
}[${devider * (page - 1)}...${devider * (page - 1) + devider}]
`;

const getContentByIdQuery = (id: string) => `*[_id == '${id}']`;

export const QUERY = {
  GET_POST_ALL_CNT: getPostAllCntQuery,
  GET_LATEST_CONTENT: getLatestContentQuery,
  GET_POST_LIST: (page: number) => getPostListQuery(page),
  GET_CONTENT_BY_ID: (id: string) => getContentByIdQuery(id),
};

// santiyClient.fetch
export const scFetch = async (query: string) => {
  return await santiyClient.fetch(query).catch((err) => {
    console.log({ err });
    return null;
  });
};
