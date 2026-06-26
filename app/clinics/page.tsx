import { client } from "@/lib/sanity";
import ClinicsView from "./ClinicsView";

async function getClinicsData() {
  return await client.fetch(`*[_type == "clinicsPage"][0]`);
}

export default async function ClinicsPage() {
  const sanityData = await getClinicsData();
  return <ClinicsView sanityData={sanityData ?? null} />;
}
