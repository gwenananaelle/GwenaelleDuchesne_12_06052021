import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { fetchUser } from 'services/fetchAPI'
import NavigationBar from 'components/NavigationBar'
import Sidebar from 'components/Sidebar'
import KeyData from 'components/KeyData'
import Performance from 'components/Performance'
import Header from 'components/Header'
import Activity from 'components/Activity'

const StyledMain = styled.main`
    display: inline-block;
`
export default function Dashboard() {
    let { id } = useParams()
    const [{ userInfos, keyData }, setData] = useState({})

    useEffect(() => {
        fetchUser(id).then((res) => {
            if (res) {
                setData(res)
            }
        })
    }, [id])
    let dataElm = keyData && Object.keys(keyData).map((category, index) => {
        return <KeyData key={index+ category} category ={category} categoryCount={keyData[category]} />
    });

    return (
        <div>
            <NavigationBar />
            <Sidebar />
            <StyledMain>
                {userInfos && <Header firstName={userInfos.firstName} />}
                {dataElm}
                <Activity />
                <Performance />
            </StyledMain>
        </div>
        
    )
}
