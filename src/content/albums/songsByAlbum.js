import { api_url } from '../../util';

export async function getSongs(album_id) {
    const content = [];
    const url = `${api_url}/albums/${album_id}`;
    const album = await fetch(url).then(res => res.json()).then(data => data);

    for (const song of album.songs) {
        const [id, name] = song;
        await fetch(`${api_url}/songs/${id}`).then(res=>res.json()).then(song => content.push(song));
    }

    return content;
}