export function getBreeds(animal) {
  let breeds;
  switch (animal) {
    case "dog":
      breeds = ["dogA", "dogB", "dogC"];
      break;
    case "cat":
      breeds = ["catA", "catB", "catC"];
      break;
    default:
      breeds = ["commonA", "commonB", "commonC"];
      break;
  }
  return Promise.resolve(breeds);
}
