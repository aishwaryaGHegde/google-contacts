import Constants from "./Constants"

function usePeople(cookies = {}, history) {
    const tokensObj = cookies.get(Constants.cookies.tokens)
    let request_url = `https://cors-anywhere.herokuapp.com/https://people.googleapis.com/v1/people/me/connections?fields=connections&key=${Constants.googleAuth.apiKey}&access_token=${tokensObj.access_token}&personFields=names,phoneNumbers,coverPhotos,emailAddresses`
    fetch(request_url)
        .then(resp => resp.json())
        .then(res => localStorage.setItem(Constants.localstorage.contacts, JSON.stringify(res)))
        .then(history.push("/contacts"))
}

const Utility = {
    usePeople
}

export default Utility