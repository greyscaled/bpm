const decimalFormatter = new Intl.NumberFormat("en", {
  maximumSignificantDigits: 3,
});

export function formatDecimal(n: number) {
  return decimalFormatter.format(n);
}
