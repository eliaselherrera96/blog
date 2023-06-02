const notFoundMiddleware = (req, res) => {
  res.status(404).send("Pfad existiert nicht!");
};

export default notFoundMiddleware;
