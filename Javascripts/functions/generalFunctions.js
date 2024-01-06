const API_URL = `https://handy-tarifvergleich-server.azurewebsites.net`;

export function checkIfUserIsLoggedIn() {
    try {
        localStorage.setItem("token", "aölsdjkflöjalsdfkjasöfldkj");
        const token = localStorage.getItem("token");
        if (token == null || token == "") {
            throw new Error("Kein Token vorhanden.");
        }
        if (isTokenVaild(token)) {
            return true;
        } else {
            throw new Error("Token in ungültig.");
        }
    }
    catch {
        return false;
    }
};

export async function isTokenVaild(token) {
    try {
        const checkTokenURL = API_URL + "/users/isTokenValid";
        const response = await fetch("https://handy-tarifvergleich-server.azurewebsites.net/offers/all");
        console.log(response);
    } catch (error) {
        console.log('Fetch Error', error);
    }
} 