import { ReactComponent as Meditating } from '../assets/meditating.svg'
import { ReactComponent as Swimming } from '../assets/swimming.svg'
import { ReactComponent as Biking } from '../assets/biking.svg'
import { ReactComponent as Dumbbell } from '../assets/dumbbell.svg'
import styled from 'styled-components'
import colors from '../utils/style/colors'

const StyledSidebar = styled.div `
    background-color: ${colors.primary};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 117px;
    height: 1024px;
    position: relative;
`
const IconContainer = styled.div `
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
`
const ExerciseIcon = styled.span`
    margin: 20px;
    background-color: #FFFFFF;
    border-radius: 6px;
    width: 64px;
    height: 64px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
`
const StyledText = styled.p `
    position: absolute;
    bottom: 59px;
    width: 200px;
    color: #FFFFFF;
    transform: rotate(-90deg);
`
function Sidebar() {
    return(
        <StyledSidebar>
            <IconContainer>
                <ExerciseIcon><Meditating /></ExerciseIcon>
                <ExerciseIcon><Swimming /></ExerciseIcon>
                <ExerciseIcon><Biking /></ExerciseIcon>
                <ExerciseIcon><Dumbbell /></ExerciseIcon>
            </IconContainer>
            <StyledText>Copyright, SportSee 2020</StyledText>
        </StyledSidebar>
    )
}

export default Sidebar