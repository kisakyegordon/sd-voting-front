const API = "https://reqres.in/api";

// Generate unique token
let token = localStorage.token
if (!token) { token = localStorage.token = Math.random().toString(36).substr(-8); }

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

export const getAllElection = () => {
    fetch(`${API}/`, { headers })
        .then(res => res.json())
        .then(data => data.result)
}

export const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true
      setTimeout(cb, 100)
    },
    signout(cb) {
      this.isAuthenticated = false
      setTimeout(cb, 100)
    }
}