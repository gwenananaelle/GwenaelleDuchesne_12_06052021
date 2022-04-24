import energy from 'assets/energy.svg'
import chicken from 'assets/chicken.svg'
import apple from 'assets/apple.svg'
import cheeseburger from 'assets/cheeseburger.svg'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import colors from '../utils/style/colors'

const DataBox = styled.div`
    box-sizing: border-box;
    padding: 32px;
    width: 258px;
    height: 124px;
    background: ${colors.background};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 39px;
`
const Icon = styled.span`
    border-radius: 6px;
    width: 60px;
    height: 60px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.backgroundColor || 'palevioletred'};
`
const Text = styled.div`
    margin-left: 24px;
    & span {
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
    }
    & p {
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: #74798c;
        margin: 0;
    }
`
/**
 * thumb component, counts for calories, proteins, glucides or lipids
 * @param {object} props
 * @param {string} props.category "calorieCount, proteinCount, carbohydrateCount, lipidCount"
 * @param {number} props.categoryCount
 * @returns {string} component generated HTML
 */
function KeyData({ category, categoryCount }) {
    let image, unit, type, alt, color

    switch (category) {
        case 'calorieCount':
            image = energy
            alt = 'fire icon'
            unit = 'kCal'
            type = 'Calories'
            color = 'rgba(255, 0, 0, 0.07)'
            break

        case 'proteinCount':
            image = chicken
            alt = 'chicken icon'
            unit = 'g'
            type = 'Proteines'
            color = 'rgba(74, 184, 255, 0.1);'
            break

        case 'carbohydrateCount':
            image = apple
            alt = 'apple icon'
            unit = 'g'
            type = 'Glucides'
            color = 'rgba(249, 206, 35, 0.1)'
            break

        case 'lipidCount':
            image = cheeseburger
            alt = 'cheeseburger icon'
            unit = 'g'
            type = 'Lipides'
            color = 'rgba(253, 81, 129, 0.1);'
            break

        default:
            break
    }
    return (
        <DataBox>
            <Icon backgroundColor={color}>
                <img src={image} alt={alt}></img>
            </Icon>
            <Text>
                <span>
                    {categoryCount || 0}
                    {unit}
                </span>
                <p>{type}</p>
            </Text>
        </DataBox>
    )
}
KeyData.propTypes = {
    category: PropTypes.string,
    categoryCount: PropTypes.number,
}
export default KeyData
