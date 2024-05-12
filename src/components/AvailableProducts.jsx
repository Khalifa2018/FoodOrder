import { useFetch } from "../hooks/useFetch";
import { fetchAvailableMeals } from "../http";
import Products from "./Products";

export default function AvailableProducts() {
  const { isFetching, fetchedData, setFetchedData, error } = useFetch(
    fetchAvailableMeals,
    []
  );

  if (error) {
    return <p>{error}</p>;
  }

  return <Products products={fetchedData} isLoading={isFetching} />;
}
