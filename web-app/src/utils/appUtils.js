export const round = (value, presision) => {
  const multiplier = Math.pow(10, presision || 0);
  console.log(multiplier);
  console.log(Math.round(value * multiplier) / (multiplier * 1.0));
  return Math.round(value * multiplier) / (multiplier * 1.0);
};
