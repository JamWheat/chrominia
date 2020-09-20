import tokenService from "./tokenService";
const BASE_URL = "/api/projects/";

export function create(project) {
    return fetch(BASE_URL, {
        method: "POST",
        headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
        body: JSON.stringify(project)
    }, { mode: "cors" })
        .then(res => res.json());
}