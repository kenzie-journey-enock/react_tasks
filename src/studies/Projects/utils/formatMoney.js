export default function formatMoney(value) {
  if (typeof value !== "number") {
    throw new Error("The value must be a number.");
  }

  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}
