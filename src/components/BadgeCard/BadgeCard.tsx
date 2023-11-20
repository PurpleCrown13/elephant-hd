import React from 'react';
import { Card, Image, Text, Group, Badge, Button } from '@mantine/core';
import classes from './BadgeCard.module.css';
import { Link } from 'react-router-dom';

interface BadgeCardProps {
    image: string;
    title: string;
    genre: string;
    description: string;
    badges: { label: string }[];
    movie_link: string;
    sub_ru: string;
    sub_en: string;
    sub_ua: string;
    
}

export function BadgeCard(props: BadgeCardProps) {
    const { image, title, description, genre, badges, movie_link, sub_ru, sub_en, sub_ua } = props;

    console.log('Props in BadgeCard:', {
        image,
        title,
        description,
        genre,
        badges,
        movie_link,
        sub_ru,
        sub_en,
        sub_ua,
    });

    let cardColor: string;
    const lowerCaseGenre = genre.toLowerCase();
    switch (lowerCaseGenre) {
        case 'movie':
            cardColor = 'blue';
            break;
        case 'cartoon':
            cardColor = '#E17900';
            break;
        case 'tv':
            cardColor = 'green';
            break;
        case 'anime':
            cardColor = 'red';
            break;
        default:
            cardColor = '#111';
            break;
    }
    const features = badges.map((badge) => (
        <Badge variant="dot" key={badge.label} color={cardColor}>
            {badge.label}
        </Badge>
    ));


    

    return (
        <Card withBorder radius="md" p="md" className={classes.card}>
            <Card.Section>
                <Image src={image} alt={title} height={300} />
            </Card.Section>

            <Card.Section className={classes.section} mt="md">
                <Group justify="apart">
                    <Text fz="lg" fw={500}>
                        {title}
                    </Text>
                    <Badge size="sm" variant="outline" color={cardColor}>
                        {genre}
                    </Badge>
                </Group>
                <Text fz="sm" mt="xs">
                    {description}
                </Text>
            </Card.Section>

            <Card.Section className={classes.section}>
                <Text mt="md" className={classes.label} c="dimmed">
                    Tags
                </Text>
                <Group gap={7} mt={5}>
                    {features}
                </Group>
            </Card.Section>

            <Group mt="xs" style={{ width: '100%' }}>
                <Link to={`/watch/${title}`} state={{ image, title, movie_link, sub_ru, sub_en, sub_ua }} style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
                    <Button radius="md" color={cardColor} style={{ width: '100%' }}>
                        Watch
                    </Button>
                </Link>
            </Group>


        </Card>
    );
}
