import React from 'react'
import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Label,
    Legend,
} from 'recharts'
import colors from 'utils/style/colors'
import styled from 'styled-components'
import PropTypes from 'prop-types'

/*
STYLE
 */

const StyledLabelFirstLine = styled.tspan`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
`
const StyledLabelSecondLine = styled.tspan`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    fill: #74798d;
`
const StyledResponsiveContainer = styled(ResponsiveContainer)`
    background: ${colors.background};
`
/*
COMPONENT
*/

/**
 * React component "Score" with pie chart
 * @param Object props
 * @param {Number} props.todayScore
 * @returns {string} component generated HTML
 */
function Score({ todayScore }) {
    const cellColors = [colors.secondary, colors.background]
    const data = [
        {
            value: todayScore * 360,
        },
        {
            value: (1 - todayScore) * 360,
        },
    ]
    const renderLegend = () => {
        return <p>score</p>
    }
    const CustomLabel = ({ viewBox }) => {
        const { cx, cy } = viewBox
        return (
            <React.Fragment>
                <circle cx={cx} cy={cy} r="70" fill="white" />

                <text>
                    <StyledLabelFirstLine x={cx - 24} y={cy - 5}>{`${
                        todayScore * 100
                    }%`}</StyledLabelFirstLine>
                </text>
                <text x={cx - 58} y={cy + 15}>
                    <StyledLabelSecondLine>
                        de votre objectif
                    </StyledLabelSecondLine>
                </text>
            </React.Fragment>
        )
    }
    return (
        <StyledResponsiveContainer width="100%" height="100%">
            <PieChart width={730} height={250}>
                <Pie
                    data={data}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    startAngle={90}
                    endAngle={450}
                    innerRadius={70}
                    outerRadius={80}
                    fill={colors.secondary}
                >
                    <Label
                        offset={0}
                        position="center"
                        content={CustomLabel}
                        fill="#FFFFFF"
                    />
                    {data.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={cellColors[index]}
                            stroke={'none'}
                        />
                    ))}
                </Pie>
                <Legend
                    verticalAlign="top"
                    align="left"
                    content={renderLegend}
                />
            </PieChart>
        </StyledResponsiveContainer>
    )
}
Score.propTypes = {
    todayScore: PropTypes.number,
}

export default Score
