import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom';

const StyledMain = styled.main`
    display: inline-block;
`

function Dashboard() {
    let { id } = useParams();
    const [{userInfos}, setData] = useState({})

    useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(`http://localhost:3000/user/${id}`)
        const { data }  = await response.json()
        data && setData(data)
        console.log(data);
      } catch (err) {
        console.log(err)
      }
    }
    fetchUser()
    }, [id])

    return (
        <StyledMain>
            <h1>Bonjour {userInfos ? userInfos.firstName : 'Carlos'}</h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </StyledMain>
    )
}
export default Dashboard