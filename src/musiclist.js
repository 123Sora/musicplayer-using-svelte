import { writable } from "svelte/store";

export const musicList = writable([
    {
        image: "lisa.jpg",
        audio: "lisa.mp3",
        name: "Moonlight",
        artist: "Lisa",
    },
    {
        image: "jennie.jpg",
        audio: "jenniemantra.mp3",
        name: "Jennie Mantra",
        artist: "Jennie",
    },
    {
        image: "jennieoneoutofgirl.jpg",
        audio: "oneoutofgirl_goodforyou.mp3",
        name: "One Out Of Girls",
        artist: "Jennieee",
    },
    {
        image: "roseapt.jpg",
        audio: "rosebrunoapt.mp3",
        name: "APT",
        artist: "rose",
    },
    {
        image: "jennieoneoutofgirl.jpg",
        audio: "oneoutofgirl_goodforyou.mp3",
        name: "One Out Of Girls",
        artist: "Jennieee",
    },
]);