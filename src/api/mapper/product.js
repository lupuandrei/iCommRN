export const normalizeProduct = product => {
  const {id, name, img, price, colour} = product;
  return {
    id,
    name,
    price,
    colour,
    image: img,
  };
};
