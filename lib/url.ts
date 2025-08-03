import qs from "query-string";
interface UrlQueryParams {
  params: string;
  key: string;
  value: string;
}
interface RemoveUrlQueryParams {
  params: string;
  keysToRemove: string[];
}

export const formUrlQuery = ({ params, key, value }: UrlQueryParams) => {
  const queryString = qs.parse(params);
  queryString[key] = value;
  return qs.stringifyUrl({
    url: window.location.pathname,
    query: queryString,
  });

  // Implementation using URLSearchParams
  // This is a more modern approach that works in most browsers
  // and does not require any external libraries.
  // It is also more efficient for simple query manipulation.
  //   const searchParams = new URLSearchParams(params);
  //   searchParams.set(key, value);
  //   return `${window.location.pathname}?${searchParams.toString()}`;
};

export const removeKeysFromUrlQuery = ({
  params,
  keysToRemove,
}: RemoveUrlQueryParams) => {
  const queryString = qs.parse(params);
  keysToRemove.forEach((key) => {
    delete queryString[key];
  });
  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: queryString,
    },
    {
      skipNull: true,
      skipEmptyString: true,
    }
  );

  //   const searchParams = new URLSearchParams(params);
  //   keysToRemove.forEach((key) => {
  //     searchParams.delete(key);
  //   });
  //   return `${window.location.pathname}?${searchParams.toString()}`;
};
