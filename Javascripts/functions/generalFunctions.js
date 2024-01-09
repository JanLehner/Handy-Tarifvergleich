const API_URL = 'https://handy-tarifvergleich-server.azurewebsites.net'
let tokenValid = false

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
    let token = sessionStorage.getItem('token')
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
        const data = await response.text()
        if (data === 'true') return true
        else return false
    } catch (error) {
        return false
    }
}

export async function isUserAdmin() {
    let token = sessionStorage.getItem('token')
    try {
        const checkTokenURL = API_URL + '/users/isAdmin'
        const response = await fetch(`${checkTokenURL}`, {
            method: 'GET',
            headers: {
                Accept: '*/*',
                Authorization: `Bearer ${token}`,
            },
        })
        const data = await response.text()
        if (data === 'true') return true
        else return false
    } catch (error) {
        return false
    }
}

export function logout() {
    sessionStorage.removeItem('token')
    window.location.hash = '#login'
}
