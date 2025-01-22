const APIURL = process.env.NEXT_PUBLIC_API_URL;

export async function createOrder(products: number[], token: string) {
  try {
    const response = await fetch(`${APIURL}/orders`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: token
      },
      body: JSON.stringify({
        products
      })
    });

    return response.json();
    alert("Buy succesfully")
  } catch (error: any) {
    alert("An error occurred")
    throw new Error(error);
  }
}; 

export async function getOrders(token: string) {
  try {
    const response = await fetch(`${APIURL}/users/orders`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: token
      }
    });

    return response.json();
  } catch (error: any) {
    throw new Error(error);
  }
};
