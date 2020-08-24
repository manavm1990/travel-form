export default {
  addTravel(newTravel) {
    fetch("http://localhost:5000/travel/add", {
      method: "POST",
      headers: {
        // Must specify that we are sending JSON! 🙄
        "Content-Type": "application/json",
      },
      // Turn 'newTravel' JS Object into actual JSON
      body: JSON.stringify(newTravel),
    })
  },

  deleteAllTravels() {
    fetch("http://localhost:5000/travels/delete", {
      method: "DELETE"
    })
  }
}
