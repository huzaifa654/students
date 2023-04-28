import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AuthenticationNavigation from './AuthenticationNavigation/AuthenticationNavigation';

export default function NavContainer() {
    return (
        <NavigationContainer>
            <AuthenticationNavigation />
        </NavigationContainer>
    )
}
