import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchPerformance } from 'services/fetchAPI'
import {
    ResponsiveContainer,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    Radar,
} from 'recharts'
import styled from 'styled-components'
import colors from 'utils/style/colors'
import PerformanceMapper from 'mapper/PerformanceMapper'

/*
STYLE
 */

const StyledResponsiveContainer = styled(ResponsiveContainer)`
    background: #282d30;
    color: ${colors.background};
`

/*
COMPONENT
*/
/**
 * React component "Performance" with radar chart
 * @returns {string} component generated HTML
 */
function PerformanceRadarChart() {
    let { id } = useParams()
    const [data, setData] = useState({})
    useEffect(() => {
        fetchPerformance(id).then((res) => {
            if (res) {
                setData(PerformanceMapper.convertToPerformances(res))
            }
        })
    }, [id])
    return (
        <StyledResponsiveContainer width="100%" height="100%">
            <RadarChart data={data} outerRadius="70%">
                <PolarGrid radialLines={false} />
                <PolarAngleAxis
                    dataKey="kind"
                    tick={{
                        fill: 'white',
                        fontSize: 12,
                    }}
                />
                <Radar
                    dataKey="value"
                    stroke="FF0101B2"
                    fill={colors.secondary}
                    fillOpacity={0.7}
                />
            </RadarChart>
        </StyledResponsiveContainer>
    )
}
export default PerformanceRadarChart
