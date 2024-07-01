import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url"


export const client = createClient({
  projectId: "kwjtv4z1",
  dataset: "production",
  apiVersion: "2024-06-01",
  useCdn: true,
});

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
    return builder.image(source);
  }

 