import { companies } from "../../../data/companies";

import CompanyHero from "../../../components/companies/CompanyHero";

import CompanyContent from "../../../components/companies/CompanyContent";

export default function CompanyPage({
  params,
}: {
  params: { slug: string };
}) {
  const company = companies.find(
    (c) => c.slug === params.slug
  );

  if (!company) {
    return (
      <div className="p-10">
        <h1>Company not found</h1>
      </div>
    );
  }

  return (
    <main>
      <CompanyHero company={company} />

      <CompanyContent company={company} />
    </main>
  );
}
