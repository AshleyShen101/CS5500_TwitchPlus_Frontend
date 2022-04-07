const SERVER_ORIGIN = '';

// login api
const loginUrl = `${SERVER_ORIGIN}/login`;
export const login = (credential) => {
    return fetch(loginUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(credential)
    }).then((response) => {
        if (response.status !== 200) {
            throw Error('Fail to log in');
        }

        return response.json();
    })
}

// register api
const registerUrl = `${SERVER_ORIGIN}/register`;
export const register = (data) => {
    return fetch(registerUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then((response) => {
        if (response.status !== 200) {
            throw Error('Fail to register');
        }
    })
}

// logout api
const logoutUrl = `${SERVER_ORIGIN}/logout`;
export const logout = () => {
    return fetch(logoutUrl, {
        method: 'POST',
        credentials: 'include',
    }).then((response) => {
        if (response.status !== 200) {
            throw Error('Fail to log out');
        }
    })
}

// topGame api
const topGamesUrl = `${SERVER_ORIGIN}/game`;
export const getTopGames = () => {
    return fetch(topGamesUrl).then((response) => {
        if (response.status !== 200) {
            throw Error('Fail to get top games');
        }

        return response.json();
    })
}

// getGameDetails api
const getGameDetailsUrl = `${SERVER_ORIGIN}/game?game_name=`;
const getGameDetails = (gameName) => {
    return fetch(`${getGameDetailsUrl}${gameName}`).then((response) => {
        if (response.status !== 200) {
            throw Error('Fail to find the game');
        }

        return response.json();
    });
}

// searchGameById api
const searchGameByIdUrl = `${SERVER_ORIGIN}/search?game_id=`;
export const searchGameById = (gameId) => {
    return fetch(`${searchGameByIdUrl}${gameId}`).then((response) => {
        if (response.status !== 200) {
            throw Error('Fail to find the game');
        }
        return response.json();
    })
}

// searchGameByName api
export const searchGameByName = (gameName) => {
    return getGameDetails(gameName).then((data) => {
        if (data && data.id) {
            return searchGameById(data.id);
        }

        throw Error('Fail to find the game')
    })
}

// favoriteItem api
const favoriteItemUrl = `${SERVER_ORIGIN}/favorite`;
export const addFavoriteItem = (favItem) => {
    return fetch(favoriteItemUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ favorite: favItem })
    }).then((response) => {
        if (response.status !== 200) {
            throw Error('Fail to add favorite item');
        }
    })
}

// deletefavoriteItem api
export const deleteFavoriteItem = (favItem) => {
    return fetch(favoriteItemUrl, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ favorite: favItem })
    }).then((response) => {
        if (response.status !== 200) {
            throw Error('Fail to delete favorite item');
        }
    })
}

// getFavoriteItem api
export const getFavoriteItem = () => {
    return fetch(favoriteItemUrl, {
        credentials: 'include',
    }).then((response) => {
        if (response.status !== 200) {
            throw Error('Fail to get favorite item');
        }

        return response.json();
    })
}

// getRecommendedItems api
const getRecommendedItemsUrl = `${SERVER_ORIGIN}/recommendation`;
export const getRecommendations = () => {
    return fetch(getRecommendedItemsUrl, {
        credentials: 'include',
    }).then((response) => {
        if (response.status !== 200) {
            throw Error('Fail to get recommended item');
        }

        return response.json();
    })
}
