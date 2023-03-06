//object can be a number or an object with desktop, tablet and mobile properties
const getFromResolution = (
  resolution: number,
  object: { desktop: number; tablet: number; mobile: number } | number,
) => {
  //if object is a number, return it
  if (typeof object === "number") {
    return object;
  }

  if (resolution > 767) {
    return object.desktop;
  } else if (resolution > 425) {
    return object.tablet;
  } else {
    return object.mobile;
  }
};

export default getFromResolution;
