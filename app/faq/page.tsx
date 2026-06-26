import { client } from "@/lib/sanity";
import FaqView from "./FaqView";

async function getFaqData() {
  return await client.fetch(`*[_type == "faqPage"][0]`);
}

export default async function FaqPage() {
  const sanityData = await getFaqData();
  return <FaqView sanityData={sanityData ?? null} />;
}
