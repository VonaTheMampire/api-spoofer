module.exports = {
  "/authenticate": {
    method: "post",
    return: {
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiZW1pbGphLndlaXNzIiwidGVhbSI6IkwuQSBTcGFyeCJ9fQ.-y24KAElQHI-HnqOcwevo_i0y_RKYXnzJhPXHwymOsY"
    }
  },
  "/people/:id": {
    method: "get",
    return: {
      people: [
        {
          id: 5,
          name: 'Jane Lane',
          likes: ['art', 'pizza']
        }
      ]
    }
  }
}