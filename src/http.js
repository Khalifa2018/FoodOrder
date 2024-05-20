export async function fetchMeals() {
  const response = await fetch("http://localhost:3000/meals");
  const meals = await response.json();
  return meals;
}

export async function submitOrder(order) {
  console.log(JSON.stringify({ order }));

  const response = await fetch("http://localhost:3000/orders", {
    method: "POST",
    body: JSON.stringify({ order }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const resData = await response.json();
  return resData.message;
}
