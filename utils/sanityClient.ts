import SanityClient from "@sanity/client";

const santiyClient = new SanityClient({
  dataset: "production",
  projectId: "dcrtcxxm",
  useCdn: process.env.NODE_ENV === "production",
  token: "",
});

export const getAllContent = async () => {
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
