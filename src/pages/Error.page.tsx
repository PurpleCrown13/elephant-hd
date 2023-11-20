import { Title, Text, Button, Container, Group } from '@mantine/core';
import classes from '../ServerError.module.css';
import { HeaderSearch } from '@/components/Header/HeaderSearch';
import { FooterSimple } from '@/components/Footer/FooterSimple';
import { Link } from 'react-router-dom';  

export function ServerError() {
    return (
        <div>
         <HeaderSearch />
      <div className={classes.root}>
            <Container>
                <div className={classes.label}>Error</div>
                    <Title className={classes.title}>Return to home page?</Title>
                    <Text size="lg" ta="center" className={classes.description}>
                    </Text>
                    <Group justify="center">
                        <Link
                            to='/'
                            className={classes.link}
                        >
                            <Button variant="outline" size="md">
                                Home
                            </Button>
                        </Link>
                    
                </Group>
            </Container>
        </div>
            <FooterSimple />
        </div>  
    );
}

