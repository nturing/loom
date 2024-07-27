  /**
  * Error handling middleware for Express applications.
  * @param {Object} err - The error object, containing information about the error.
  * @param {Object} req - The request object, which is not used by this middleware.
  * @param {Object} res - The response object used to send an error response to the client.
  * @param {Function} next - The next middleware function in the stack, which is not used by this middleware.
  * @returns {void}
  */
  module.exports = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  }