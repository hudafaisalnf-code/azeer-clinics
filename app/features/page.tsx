import { client } from "@/lib/sanity";
import FeaturesView from "./FeaturesView";

async function getFeaturesData() {
  return await client.fetch(`*[_type == "featuresPage"][0]`);
}

export default async function FeaturesPage() {
  const sanityData = await getFeaturesData();
  return <FeaturesView sanityData={sanityData ?? null} />;
}
