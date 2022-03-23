import styled from 'styled-components'

const StyledMain = styled.main`
    display: inline-block;
`
function Dashboard() {
    return (
        <StyledMain>
            <h1>Bonjour Thomas</h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </StyledMain>
    )
}
export default Dashboard