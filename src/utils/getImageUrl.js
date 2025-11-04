function getImageURL(name) {
  return new URL(`../assets/image/products/${name}`, import.meta.url).href;
}

export { getImageURL };
