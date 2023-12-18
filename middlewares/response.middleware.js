const responseMiddleware = (_req, res, next) => {
  // TODO: Implement middleware that returns result of the query
  if (res.err) {
    res.json({ error: true, message: res.err });
  } else {
    res.json(res.data);
  }

  next();
};

export { responseMiddleware };
