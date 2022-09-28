export function getImageUrl(person) {
  return "https://i.imgur.com/" + person.imageId + "s.jpg";
}

export function getCityImageUrl(place) {
  return "https://i.imgur.com/" + place.imageId + "l.jpg";
}
