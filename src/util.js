export function request(params) {
    const base_url = 'https://salty-oasis-19252.herokuapp.com';
    // const base_url = 'http://127.0.0.1:5000/';
    const endpoints = ['albums', 'artists', 'songs'];
    let url;

    if (endpoints.includes(params)) url = `${base_url}/${params}`;
    else  url = base_url;

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
                cover: `${item.cover}`
            })
        }
    );

    return alpha;
}

