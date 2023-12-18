const responseMiddleware = (req, res, next) => {
  // TODO: Implement middleware that returns result of the query
  try {
    res.json(res.data);
  } catch (error) {
    res.status(400).json(res.err);
  }
  next();
};

export { responseMiddleware };
