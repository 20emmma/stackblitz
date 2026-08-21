const WORDPRESS_API_URL = 'https://neweragroup.rf.gd/wp-json/wp/v2';

export interface WordPressCompany {
  id: number;
  slug: string;

  title: {
    rendered: string;
  };

  featured_media: number;

  acf: {
    short_name: string;
    industry: string;
    summary: string;
    locations: string;
    phone: string;
    email: string;
    address: string;
    rc_number: string;
    vision: string;
    mission: string;
    core_values: string;
  };
}

export async function getCompanies(): Promise<WordPressCompany[]> {
  const response = await fetch(
    `${WORDPRESS_API_URL}/companies`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  const contentType = response.headers.get("content-type") || "";

  if (!response.ok) {
    const text = await response.text();

    throw new Error(
      `WordPress API error ${response.status}: ${text.slice(0, 200)}`
    );
  }

  if (!contentType.includes("application/json")) {
    const text = await response.text();

    throw new Error(
      `WordPress API returned ${contentType} instead of JSON: ${text.slice(
        0,
        200
      )}`
    );
  }

  return response.json();
}

export async function getCompany(
  slug: string
): Promise<WordPressCompany | null> {
  const response = await fetch(
    `${WORDPRESS_API_URL}/companies?slug=${encodeURIComponent(slug)}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch company from WordPress');
  }

  const companies: WordPressCompany[] = await response.json();

  return companies.length > 0 ? companies[0] : null;
}
