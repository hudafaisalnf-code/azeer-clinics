import { client } from "@/lib/sanity";
import PricingView from "./PricingView";

async function getPricingData() {
  return await client.fetch(`*[_type == "pricingPage"][0]`);
}

export default async function PricingPage() {
  const sanityData = await getPricingData();
  return <PricingView sanityData={sanityData ?? null} />;
}
