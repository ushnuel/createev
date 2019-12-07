class FeedbackHandler {
  static error(err, req, res, next) {
    const { message, status } = err;
    const error = status === 500 ? 'Server error' : message;
    res.status(status).json({
      status,
      error,
    });
  }
}

export default FeedbackHandler;
