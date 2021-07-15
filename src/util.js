function request(params) {
    // const base_url = 'https://salty-oasis-19252.herokuapp.com';
    const base_url = 'http://127.0.0.1:5000/';
    const endpoints = ['albums', 'artists', 'songs'];
    let url;

    if (endpoints.includes(params)) url = `${base_url}/${params}`;
    else  url = base_url;

    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false);
    xmlHttp.send(null);
    return xmlHttp;
}

export default request;
