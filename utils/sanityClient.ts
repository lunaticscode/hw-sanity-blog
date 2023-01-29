import getConfig from "next/config";
import SanityClient from "@sanity/client";

const { publicRuntimeConfig } = getConfig();

const santiyClient = new SanityClient({
  apiVersion: "2021-10-21",
  dataset: "production",
  projectId: "dcrtcxxm",
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_TOKEN,
});

export const getAllContent = async () => {
  console.log(publicRuntimeConfig.SANITY_TOKEN);
  return await santiyClient.fetch(
    `
        *[_type == 'post'] {
            title,
            body,
            _createdAt,
            _updatedAt,
            _id,
            mainImage,
        }
    `
  );
};
