const decimalFormatter = new Intl.NumberFormat("en", {
  maximumSignificantDigits: 3,
});

export function formatDecimal(n: number): string {
  return decimalFormatter.format(n);
}
