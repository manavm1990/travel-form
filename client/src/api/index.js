export default {
  async addTravel(newTravel) {
    try {
      const res = await fetch("http://localhost:5000/travel/add", {
        method: "POST",
        headers: {
          // Must specify that we are sending JSON! 🙄
          "Content-Type": "application/json",
        },
        // Turn 'newTravel' JS Object into actual JSON
        body: JSON.stringify(newTravel),
      })
      return await res.json()
    } catch (e) {

  async deleteAllTravels() {
    const res = await fetch("http://localhost:5000/travel/delete", {
      method: "DELETE"
    })

    return await res.json()
  },

  async showTravels(email) {
    try {
      const res = await fetch("http://localhost:5000/travel/show", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // {email: email}
        body: JSON.stringify({ email }),
      })

      return await res.json()
    } catch (err) {
      throw new Error(err)
    }
  },
}
