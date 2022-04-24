import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchSessions } from 'services/fetchAPI'
import {
    ResponsiveContainer,
    LineChart,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Line,
} from 'recharts'
import colors from 'utils/style/colors'
import styled from 'styled-components'
import AverageSessionsMapper from 'mapper/AverageSessionsMapper'

/*
STYLE
 */

const StyledResponsiveContainer = styled(ResponsiveContainer)`
    background: ${colors.secondary};
`
const StyledTooltip = styled.div`
    background: #ffffff;
    height: 25px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const StyledLabel = styled.p`
    font-size: 8px;
`
const StyledCursor = styled.rect`
    width: ${(props) => props.width || 50};
    fill: #000000;
    fill-opacity: 0.1;
    height: 100%;
    x: ${(props) => props.x || 0};
`
const StyledLegend = styled.p`
    font-size: 15px;
    color: #ffffff;
    opacity: 0.5;
    margin: 29px 34px;
`

/*
CUSTOM ELEMENTS
*/

/**
 * Custom legend with specific text and style
 * @returns {string} component generated HTML
 */
function renderLegend() {
    return <StyledLegend>Durée moyenne des sessions</StyledLegend>
}
/**
 * Custom Tooltip with unit and style
 * @param {Object} props
 * @param {Array} props.payload
 * @param {Boolean} props.active
 * @returns {string} component generated HTML
 */
function CustomTooltip({ payload, active }) {
    if (active && payload && payload.length) {
        return (
            <StyledTooltip>
                <StyledLabel>{`${payload[0].value} min`}</StyledLabel>
            </StyledTooltip>
        )
    }

    return null
}

/**
 * Custom cursor
 * @param {Object} props
 * @param {Array} props.points
 * @param {Number} props.width
 * @returns {string} component generated HTML
 */
function CustomCursor({ points, width }) {
    let x = points[0] && points[0].x
    return <StyledCursor x={x || 0} width={width - x}></StyledCursor>
}

/*
COMPONENT
*/

/**
 * React component "AverageSessions" with line chart
 * @returns {string} component generated HTML
 */
function AverageSessionsLineChart() {
    let { id } = useParams()
    const [sessions, setData] = useState({})
    useEffect(() => {
        fetchSessions(id).then((res) => {
            if (res) {
                setData(AverageSessionsMapper.convertToAverageSessions(res))
            }
        })
    }, [id])
    return (
        <StyledResponsiveContainer width="100%" height="100%">
            <LineChart
                data={sessions}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
                <XAxis
                    dataKey="day"
                    tickLine={false}
                    tick={{ fill: '#FFFFFF', fillOpacity: 0.5 }}
                    axisLine={false}
                    interval={0}
                    padding={{ left: 15, right: 15 }}
                />
                <YAxis dataKey="sessionLength" hide={true} />
                <Tooltip
                    cursor={<CustomCursor />}
                    content={<CustomTooltip />}
                />
                <Legend
                    verticalAlign="top"
                    align="left"
                    content={renderLegend}
                />
                <Line
                    type="natural"
                    dataKey="sessionLength"
                    stroke="#FFFFFF"
                    dot={false}
                />
            </LineChart>
        </StyledResponsiveContainer>
    )
}
export default AverageSessionsLineChart
