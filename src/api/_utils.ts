interface Options {
  variables?: {
    id?: string;
    slug?: string;
  };
}

export default async function fetchAPI(query: string, { variables }: Options = {}) {
  const res = await fetch(`${process.env.VUE_APP_API_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}
