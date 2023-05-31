import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const SANITY_TOKEN = import.meta.env.VITE_PUBLIC_SANITY_TOKEN;

console.log(SANITY_TOKEN);

export const client = createClient({
  projectId: "yvbzxn78",
  dataset: "production",
  useCdn: false,
  apiVersion: "2022-09-14",
  token: SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export const createNewUser = async (data) => {
  const _doc = {
    _id: data.uid,
    _type: "user",
    image: data.photoURL,
    userName: data.displayName,
  };

  await client.createIfNotExists(_doc).then((res) => {
    return res;
  });
};
