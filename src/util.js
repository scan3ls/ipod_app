export function request(params) {
    const endpoints = ['albums', 'artists', 'songs'];
    let url;

    if (endpoints.includes(params)) url = `${api_url}/${params}`;
    else  url = api_url;

    const promise = fetch(url);

    return promise;
}

export function sortedAlpha(items) {
    const alpha = {};
    const sorted = items.sort((a, b) => (a.name > b.name) ? 1 : -1);

    'abcdefghijklmnopqrstuvwxyz'.split('').forEach(
        letter => {
            alpha[letter] = [] ;
        }
    );

    sorted.forEach(
        item => {
            const letter = item.name[0].toLowerCase();
            alpha[letter].push({
                id: `${item.id}`,
                name: `${item.name}`,
                cover: `${item.cover}`,
                artist: `${item.artist}`
            })
        }
    );

    return alpha;
}

export const api_url = 'https://salty-oasis-19252.herokuapp.com';
// export const api_url = 'http://127.0.0.1:5000';
