export const dynamic = "force-dynamic";

import { getCompanies } from "@/lib/wordpress";

export default async function WordPressTestPage() {
  const companies = await getCompanies();

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-3xl font-bold">
        WordPress Connection Test
      </h1>

      <pre className="mt-8 whitespace-pre-wrap rounded-lg bg-gray-100 p-6">
        {JSON.stringify(companies, null, 2)}
      </pre>
    </main>
  );
}
