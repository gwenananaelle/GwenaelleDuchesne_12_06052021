import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { fetchUser } from 'services/fetchAPI'
import NavigationBar from 'components/NavigationBar'
import Sidebar from 'components/Sidebar'
import KeyData from 'components/KeyData'
import Performance from 'components/PerformanceRadarChart'
import Header from 'components/Header'
import ActivityBarChart from 'components/ActivityBarChart'
import AverageSessionsLineChart from 'components/AverageSessionsLineChart'
import ScorePieChart from 'components/ScorePieChart'
import UserMapper from 'mapper/UserMapper'

/*
STYLE
 */

const StyledPageDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: center;
    align-items: flex-start;
`

const StyledMain = styled.main`
    width: 80%;
    margin: 60px auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);  
    column-gap: 30px;
    row-gap: 28px;
`
const StyledData = styled.div`
    grid-column : 4/5;
    grid-row : 2/4;
`
/**
 * React component "Dashboard" 
 * @returns {string} component generated HTML
 */
export default function Dashboard() {
    let { id } = useParams()
    const [{ firstName, score, keyData }, setData] = useState({})

    useEffect(() => {
        fetchUser(id).then((res) => {
            if (res) {
                setData(UserMapper.convertToUser(res))
            }
        })
    }, [id])

    let dataElm = keyData && keyData.map(({name, value, index}) => {
        return <KeyData key={index + name} category ={name} categoryCount={value} />
    });
    
    return (
        <StyledPageDiv>
            <NavigationBar />
            <Sidebar />
            <StyledMain>
                {firstName && <Header firstName={firstName} />}
                <ActivityBarChart />
                <StyledData>{dataElm}</StyledData>
                <AverageSessionsLineChart />
                <Performance />
                <ScorePieChart todayScore={score}/>
            </StyledMain>
        </StyledPageDiv>
        
    )
}
