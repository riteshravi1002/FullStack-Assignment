const fetchData = async (id) => {
    const response = await fetch(`/api/your-endpoint/${id}`)
    return await response.json()
  }
  