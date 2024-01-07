const API_URL = `https://handy-tarifvergleich-server.azurewebsites.net`
let tokenValid
let token
export async function checkIfUserIsLoggedIn() {
  try {
    tokenValid = await isTokenValid()
    if (tokenValid == true) return true
    else return false
  } catch {
    return false
  }
}

export async function isTokenValid() {
  localStorage.setItem(
    'token',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3RyaW5nIiwiVXNlcklkIjoiMSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNzA0NjI3Mzg2LCJpc3MiOiJJc3N1ZXIiLCJhdWQiOiJBdWRpZW5jZSJ9.l0FGgkfBYx4NrBc71IdhYkINEDUWWb6mlPJY-ZXZ1BI'
  )
  token = localStorage.getItem('token')
  try {
    if (token == null || token == '') {
      throw new Error('Kein Token vorhanden.')
    }
    const checkTokenURL = API_URL + '/users/isTokenValid'
    const response = await fetch(`${checkTokenURL}`, {
      method: 'GET',
      headers: {
        Accept: '*/*',
        Authorization: `Bearer ${token}`,
      },
    })
    if (response.status === 200) return true
    else return false
  } catch (error) {
    return false
  }
}
