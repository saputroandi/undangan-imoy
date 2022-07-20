import { createClient, createPreviewSubscriptionHook } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
import { PortableText as PortableTextComponent } from "@portabletext/react";

const config = {
  projectId: "mofmlsk1",
  dataset: "production",
  token:
    "sk4yw2Oa20eBHajW8GHgYtJgQeffpievJokve57HtBEPN89D97QvNRSFeK4iD2HD1GZCEMLTVeBHda1jR614oRLH2H37PsL4qUCYdrSUHIomGy2s9rxqwvGotohgcESiu4QcQZEuWdmYCswBQVB8ai9gM3RlKRAcxpwGvufnvdqTFISqYu1D",
  apiVersion: "2021-10-21",
  useCdn: false,
};

export const sanityClient = createClient(config);

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export const PortableText = (props) => (
  <PortableTextComponent components={{}} {...props} />
);
