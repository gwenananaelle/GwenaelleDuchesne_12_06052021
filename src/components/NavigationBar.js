import { NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../assets/logo.svg'
import styled from 'styled-components'
import colors from '../utils/style/colors'

/*
STYLE
 */
const NavigationBarDiv = styled.div`
    width: 100vw;
    height: 91px;
    background-color: ${colors.primary};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-around;
`
const StyledLogo = styled(Logo)`
    flex-grow: 1;
`
const NavigationList = styled.ul`
    flex-grow: 4;
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-content: center;
    align-items: center;
`
const StyledNavLink = styled(NavLink)`
    color: white;
    font-size: 24px;
    &:link,
    &:visited,
    &:hover,
    &:active {
        text-decoration: none;
    }
`
/**
 * React component "NavigationBar", top horizontal navigation
 * @returns {string} component generated HTML
 */
function NavigationBar() {
    return (
        <NavigationBarDiv>
            <StyledLogo />
            <NavigationList>
                <li>
                    <StyledNavLink to="/">Accueil</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to="/">Profil</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to="/">Réglages</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to="/">Communauté</StyledNavLink>
                </li>
            </NavigationList>
        </NavigationBarDiv>
    )
}

export default NavigationBar
