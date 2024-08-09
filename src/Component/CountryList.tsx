import { useFetchAllCountriesQuery } from "../generated/graphql";

export const CountryList = () => {
  const { loading, error, data } = useFetchAllCountriesQuery();
  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error :</p>}
      {data &&
        data.countries.map(({ code, name }) => (
          <div key={code}>
            <p>{code}</p>
            <p>{name}</p>
          </div>
        ))}
    </>
  );
};
