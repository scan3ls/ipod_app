import { api_url } from "../../util";
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export async function getAlbums(id) {
    let albumList = [];
    const content = [];
    const url = `${api_url}/artists/${id}`;
    await fetch(url).then( res => res.json() ).then( data => albumList = data.Album);
    
    for (const albumId of albumList) {
        const url = `${api_url}/albums/${albumId}`;
        await fetch(url).then(res=>res.json()).then(data => {
            content.push(data);
        })
        .catch(err => console.log(err));
    }

    return content;
}