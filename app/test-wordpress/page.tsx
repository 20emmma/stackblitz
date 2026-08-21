import { getCompanies } from '@/lib/wordpress';

export default async function WordPressTestPage() {
  const companies = await getCompanies();

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-3xl font-bold">WordPress Connection Test</h1>

      <div className="mt-8 space-y-6">
        {companies.map((company) => (
          <div key={company.id} className="rounded-xl border p-6">
            <h2 className="text-2xl font-bold">{company.title.rendered}</h2>

            <p className="mt-2">{company.acf.industry}</p>

            <p className="mt-2 text-gray-600">{company.acf.summary}</p>

            <p className="mt-2 text-gray-600">{company.acf.email}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
