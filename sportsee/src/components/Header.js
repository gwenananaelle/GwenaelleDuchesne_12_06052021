import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../utils/style/colors'

const StyledHeader = styled.div`
    grid-column: 1/5;
`

const StyledTitle = styled.h1`
    font-size: 3em;
    margin: 0;
    & span {
        color: ${colors.secondary};
    }
`
const StyledText = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 1.125em;
`
function Header({ firstName }) {
    return (
        <StyledHeader>
            <StyledTitle>
                Bonjour <span>{firstName}</span>
            </StyledTitle>
            <StyledText>
                Félicitation ! Vous avez explosé vos objectifs hier 👏
            </StyledText>
        </StyledHeader>
    )
}
Header.propTypes = {
    firstName: PropTypes.string,
}

export default Header
