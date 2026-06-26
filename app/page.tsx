import { client } from "@/lib/sanity";

async function getHomePageData() {
  const data = await client.fetch(`*[_type == "homePage"][0]`);
  return data;
}

export default async function HomePage() {
  const content = await getHomePageData();

  const heroTitle = content?.heroTitle || "منصة أزير الطبية";
  const heroSubtitle = content?.heroSubtitle || "نظام متكامل لإدارة العيادات الطبية";
  const heroButtonText = content?.heroButtonText || "ابدأ الآن مجاناً";
  const stats = content?.stats || [
    { number: "+500", label: "عيادة" },
    { number: "+50,000", label: "مريض" },
    { number: "99%", label: "رضا العملاء" },
  ];
  const testimonialText = content?.testimonialText || "أزير غيّر طريقة عمل عيادتي بالكامل";
  const testimonialAuthor = content?.testimonialAuthor || "د. أحمد السالم";

  return (
    <main className="min-h-screen bg-white" dir="rtl">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-24 px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">{heroTitle}</h1>
        <p className="text-xl mb-8 text-blue-100">{heroSubtitle}</p>
        <a
          href="#"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full text-lg transition"
        >
          {heroButtonText}
        </a>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-8 text-center">
          {stats.map((stat: { number: string; label: string }, i: number) => (
            <div key={i}>
              <div className="text-4xl font-extrabold text-blue-800">{stat.number}</div>
              <div className="text-gray-600 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-blue-900 text-white text-center px-6">
        <blockquote className="text-2xl font-light italic mb-4">"{testimonialText}"</blockquote>
        <p className="text-blue-300">{testimonialAuthor}</p>
      </section>
    </main>
  );
}
