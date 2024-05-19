export async function fetchAvailableMeals() {
  const response = await fetch("http://localhost:3000/meals");
  const resData = await response.json();
  return resData;
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
