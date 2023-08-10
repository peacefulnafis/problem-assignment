function findAddress(obj) {
  const { street = "__", house = "__", society = "__" } = obj;

  console.log(`${street},${house},${society}`);
  return `${street},${house},${society}`;
}

findAddress({ street: 12, house: "14B", society: "Banladesh Home" });
