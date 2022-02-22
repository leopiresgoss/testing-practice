const capitalize = string => {
  if (typeof (string) !== 'string') {
    throw new Error('You should only pass string');
  }

  const [first, ...rest] = string;

  return first.toUpperCase() + rest.join("");
};

module.exports = capitalize;
