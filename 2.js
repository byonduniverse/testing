function calculateCommision(coin, percentage) {
  return Math.round(coin * percentage);
}

console.log(calculateCommision(99, 0.04));
