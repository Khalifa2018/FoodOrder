import { useFetch } from "../hooks/useFetch.js";
import { fetchMeals } from "../http.js";
import { MealItem } from "./MealItem.jsx";

export default function Meals() {
  const { isFetching, fetchedData: meals, error } = useFetch(fetchMeals, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section>
      {!isFetching && meals.length > 0 && (
        <ul id="meals">
          {meals.map((meal) => (
            <MealItem key={meal.id} meal={meal} />
          ))}
        </ul>
      )}
    </section>
  );
}
