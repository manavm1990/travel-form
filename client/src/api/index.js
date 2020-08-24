export default {
  addTravel(newTravel) {
    fetch("http://localhost:5000/travels/add", {
      method: "POST",
      // Turn 'newTravel' JS Object into actual JSON
      body: JSON.stringify(newTravel)
    })
  },

  deleteAllTravels() {
    fetch("http://localhost:5000/travels/delete", {
      method: "DELETE"
    })
  }
}
