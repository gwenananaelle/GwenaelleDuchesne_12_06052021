import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../utils/style/colors'

const StyledTitle = styled.h1`
    font-size: 3em;
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
        <div>
            <StyledTitle>
                Bonjour <span>{firstName}</span>
            </StyledTitle>
            <StyledText>
                Félicitation ! Vous avez explosé vos objectifs hier 👏
            </StyledText>
        </div>
    )
}
Header.propTypes = {
    firstName: PropTypes.string,
}

export default Header
