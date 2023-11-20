import cx from 'clsx';
import { ActionIcon, useMantineColorScheme, useComputedColorScheme, Group } from '@mantine/core';
import classes from './ActionToggle.module.css';

export function ActionToggle() {
    const { setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

    return (
        <Group justify="center">
            <ActionIcon
                onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
                variant="default"
                size="lg"
                aria-label="Toggle color scheme"
            >
                {computedColorScheme === 'light' ? (
                    <svg width="20" height="29" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M11.623.5a.75.75 0 0 1 .706-.446C18.777.23 23.95 5.51 23.95 12c0 6.6-5.35 11.95-11.95 11.95a11.94 11.94 0 0 1-9.968-5.357.75.75 0 0 1 .779-1.148A9.65 9.65 0 0 0 14.45 8a9.615 9.615 0 0 0-2.683-6.677.75.75 0 0 1-.144-.822Zm2.41 1.248A11.101 11.101 0 0 1 15.95 8c0 6.158-4.992 11.15-11.15 11.15-.144 0-.286-.003-.429-.008A10.42 10.42 0 0 0 12 22.45c5.771 0 10.45-4.679 10.45-10.45 0-5.076-3.619-9.306-8.417-10.252Z" clip-rule="evenodd"></path>
                    </svg>
                ) : (
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M12.75.05v3.099h-1.5V.05h1.5ZM2.4 1.338l2.66 2.66L4 5.058 1.34 2.4 2.4 1.34ZM22.66 2.4 20 5.06l-1.06-1.061 2.66-2.66L22.66 2.4ZM12 7.946a4.048 4.048 0 0 0-4.05 4.047A4.048 4.048 0 0 0 12 16.04a4.048 4.048 0 0 0 4.05-4.047A4.048 4.048 0 0 0 12 7.946Zm-5.55 4.047A5.548 5.548 0 0 1 12 6.446a5.548 5.548 0 0 1 5.55 5.547A5.548 5.548 0 0 1 12 17.54a5.548 5.548 0 0 1-5.55-5.547Zm-6.4-.75h3.1v1.5H.05v-1.5Zm20.8 0h3.1v1.5h-3.1v-1.5ZM5.06 19.988l-2.66 2.66-1.06-1.062L4 18.926l1.06 1.062ZM20 18.927l2.66 2.66-1.06 1.06-2.66-2.66 1.06-1.06Zm-7.25 1.91v3.098h-1.5v-3.098h1.5Z" clip-rule="evenodd"></path>
                    </svg>
                )}
            </ActionIcon>

        </Group>
    );
}