interface Props {
  endpoint: string;
  wrappedByKey?: string;
  wrappedByList?: boolean;
  lang?: string;
}

/**
 * Fetches data from the Strapi API
 * @param endpoint - The endpoint to fetch from
 * @param wrappedByKey - The key to unwrap the response from
 * @param wrappedByList - If the response is a list, unwrap it
 * @param lang - What languages to fetch
 * @param isMenu - If the query is for a menu
 * @param populate - If relationships should be populated
 * @returns
 */
export default async function fetchApi<T>({
  endpoint,
  wrappedByKey,
  wrappedByList,
  lang,
}: Props): Promise<T> {
  if (endpoint.startsWith('/')) {
    endpoint = endpoint.slice(1);
  }

  if (lang) {
    if ( lang == 'en') {
      lang = 'locale=en';
    } else {
      lang = 'locale=fi';
    }
  } else {
    lang = 'locale=en&locale=fi';
  }

  let sort = '';
  if (endpoint == 'glossary-terms') {
    sort = '&sort=termName';
  }

  let populate = '';
  if (endpoint == 'wcag-guidelines') {
    populate = '&populate[0]=wcagPrinciple';
    sort = '&sort=guidelineNumber';
  }
  if (endpoint == 'wcag-criteria') {
    populate = '&populate[0]=wcagPrinciple&populate[1]=wcagGuideline';
    sort = '&sort=criterionNumber';
  }

  const url = new URL(`${import.meta.env.STRAPI_URL}/api/${endpoint}?populate=localizations&${lang}${sort}${populate}`);

  const res = await fetch(url.toString());
  let data = await res.json();

  if (wrappedByKey) {
    data = data[wrappedByKey];
  }

  if (wrappedByList) {
    data = data[0];
  }

  return data as T;
}