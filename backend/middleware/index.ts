export const unknownEndpoint = (_request, response) => {
  response.status(404).send({ error: 'unknown endpoint' });
};

export const errorHandeler = (error, _request, response, next) => {
  if (error.name === 'CastError') {
    return response.status(400).json({ error: error.message });
  }

  if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message });
  }

  next(error);
};
