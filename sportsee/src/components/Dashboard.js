import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { fetchUser } from 'services/fetchAPI'
import KeyData from './KeyData'
import Performance from './Performance'

const StyledMain = styled.main`
    display: inline-block;
`
function Dashboard() {
    let { id } = useParams()
    const [{ userInfos, keyData }, setData] = useState({})

    useEffect(() => {
        fetchUser(id).then((res) => {
            if (res) {
                setData(res)
            }
        })
    }, [id])
    return (
        <StyledMain>
            <h1>Bonjour {userInfos && userInfos.firstName}</h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            {keyData && <KeyData data={keyData} />}
            <Performance />
        </StyledMain>
    )
}
export default Dashboard
