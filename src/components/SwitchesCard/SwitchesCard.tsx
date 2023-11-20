import { Card, Text } from '@mantine/core';
import classes from './SwitchesCard.module.css';
import React, { useEffect, useRef } from 'react';
import Plyr, { Track, TrackKind } from 'plyr';
import 'plyr/dist/plyr.css';
import axios from 'axios';

interface SwitchesCardProps {
    image: string;
    title: string;
    movie_link: string;
    sub_ru: string;
    sub_en: string;
    sub_ua: string;
}

export function SwitchesCard(props: SwitchesCardProps) {
    const { image, title, sub_ru, sub_en, sub_ua, movie_link } = props;

    console.log(movie_link, sub_ru, sub_ua, sub_en);

    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        const initializePlayer = async () => {
            if (videoRef.current) {
                const player = new Plyr(videoRef.current, {
                    captions: { active: true, update: true, language: 'auto' },
                    keyboard: { global: true },
                    controls: ['rewind', 'play-large', 'play', 'fast-forward','progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen', ],

                });

                try {
                    const sources = [
                        {
                            src: movie_link,
                            type: 'video/mp4',
                        },
                    ];

                    const tracks: Track[] = [];

                    if (sub_en) {
                        const subtitlesResponse = await axios.get(sub_en);
                        const subtitlesContent = subtitlesResponse.data;
                        tracks.push({
                            kind: 'captions' as TrackKind,
                            label: 'English',
                            srcLang: 'en',
                            src: URL.createObjectURL(new Blob([subtitlesContent], { type: 'text/vtt' })),
                            default: true,
                        });
                    }

                    if (sub_ru) {
                        const subtitlesResponse2 = await axios.get(sub_ru);
                        const subtitlesContent2 = subtitlesResponse2.data;
                        tracks.push({
                            kind: 'captions' as TrackKind,
                            label: 'Русский',
                            srcLang: 'rus',
                            src: URL.createObjectURL(new Blob([subtitlesContent2], { type: 'text/vtt' })),
                            default: true,
                        });
                    }

                    if (sub_ua) {
                        const subtitlesResponse3 = await axios.get(sub_ua);
                        const subtitlesContent3 = subtitlesResponse3.data;
                        tracks.push({
                            kind: 'captions' as TrackKind,
                            label: 'Украiнська',
                            srcLang: 'ua',
                            src: URL.createObjectURL(new Blob([subtitlesContent3], { type: 'text/vtt' })),
                            default: true,
                        });
                    }

                    player.source = {
                        type: 'video',
                        sources,
                        tracks,
                    };
                } catch (error) {
                    console.error('Failed to load subtitles:', error);
                }
            }
        };

        if (videoRef.current && videoRef.current.readyState >= 3) {
            initializePlayer();
        } else {
            videoRef.current?.addEventListener('loadeddata', initializePlayer);
        }

        return () => {
            videoRef.current?.removeEventListener('loadeddata', initializePlayer);
        };
    }, [movie_link, sub_ru, sub_en, sub_ua]);

    return (
        <Card withBorder radius="md" p="xl" className={classes.card}>
            <img src={image} alt="poster" className='poster' />
            <Text className={classes.title} fw={500} style={{ marginBottom: "100px" }}>
                {title}
            </Text>
            <Text className={classes.player} fw={500} style={{ marginBottom: "100px" }}>
                <video ref={videoRef} controls >
                    <source src={movie_link} type="video/mp4" />
                    Ваш браузер не поддерживает тег video.
                </video>
            </Text>
        </Card>
    );
}
