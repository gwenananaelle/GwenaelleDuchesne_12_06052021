import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchActivity } from 'services/fetchAPI'
import {
    ResponsiveContainer,
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar,
} from 'recharts'
import colors from 'utils/style/colors'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ActivitySessionsMapper from 'mapper/ActivitySessionsMapper'

/*
STYLE
 */

const StyledResponsiveContainer = styled(ResponsiveContainer)`
    grid-column: 1/4;
    background: ${colors.background};
`
const StyledTooltip = styled.div`
    background: #e60000;
    height: 63px;
    width: 40px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
`
const StyledLabel = styled.p`
    font-size: 7px;
    color: #ffffff;
`
const StyledLegend = styled.span`
    font-size: 14px;
    color: #74798c;
`
/*
CUSTOM ELEMENTS
*/

/**
 * Custom legend, change text and add style
 * @param {string} value "calories, kilogram"
 * @returns {string} component generated HTML
 */
function renderColorfulLegendText(value) {
    if (value === 'kilogram') {
        return <StyledLegend>Poids (kg)</StyledLegend>
    } else if (value === 'calories') {
        return <StyledLegend>Calories brûlées (kCal)</StyledLegend>
    } else {
        return null
    }
}
renderColorfulLegendText.propTypes = {
    value: PropTypes.string,
}

/**
 * Custom tooltip, adds unit and style
 * @param {Object} props
 * @param {Array} props.payload
 * @param {Boolean} props.active
 * @returns {string} component generated HTML
 */
function CustomTooltip({ payload, active }) {
    if (active && payload && payload.length) {
        return (
            <StyledTooltip>
                <StyledLabel>{`${payload[0].value} kg`}</StyledLabel>
                <StyledLabel>{`${payload[1].value} Kcal`}</StyledLabel>
            </StyledTooltip>
        )
    }

    return null
}
CustomTooltip.propTypes = {
    payload: PropTypes.array,
    active: PropTypes.bool,
}

/*
COMPONENT
*/

/**
 * React component "Activity" with bar chart
 * @returns {string} component generated HTML
 */
function Activity() {
    let { id } = useParams()
    const [sessions, setData] = useState({})
    useEffect(() => {
        fetchActivity(id).then((res) => {
            if (res) {
                // setData(res)
                setData(ActivitySessionsMapper.convertToActivitySessions(res))
            }
        })
    }, [id])
    return (
        <StyledResponsiveContainer width="100%" height="100%">
            <BarChart
                data={sessions}
                margin={{ top: 50, right: 5, bottom: 5, left: 5 }}
            >
                <text
                    x="100"
                    y="24"
                    fill="black"
                    textAnchor="middle"
                    verticalanchor="start"
                >
                    <tspan fontSize="14">Activité quotidienne</tspan>
                </text>
                <Legend
                    iconSize="8"
                    iconType="circle"
                    verticalAlign="top"
                    align="right"
                    formatter={renderColorfulLegendText}
                    wrapperStyle={{ top: 15 }}
                />
                <CartesianGrid vertical={false} strokeDasharray="2" />
                <XAxis dataKey="day" tickLine={false} />
                <YAxis
                    orientation="left"
                    dataKey="calories"
                    yAxisId={0}
                    tickLine={false}
                    axisLine={false}
                    hide
                />
                <YAxis
                    orientation="right"
                    dataKey="kilogram"
                    yAxisId={1}
                    tickLine={false}
                    axisLine={false}
                />

                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="kilogram" fill={colors.primary} barSize={7} />
                <Bar
                    dataKey="calories"
                    fill={colors.secondary}
                    barSize={7}
                    maxBarSize={1}
                />
            </BarChart>
        </StyledResponsiveContainer>
    )
}
export default Activity
