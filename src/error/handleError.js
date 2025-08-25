const handleError = (res, error) => {
  console.error(error);

  if (error.name === "ValidationError") {
    return res.status(400).json({ error: error.message });
  }
  
    if (error.name === "CastError") {
    return res.status(400).json({ error: "Invalid Id Format" });
  }

  if (error.statusCode === 404) {
    return res
      .status(404)
      .json({ error: error.message || "Resource not found" });
  }

  return res.status(500).json({ error: "Internal Server Error" });
};

module.exports = handleError