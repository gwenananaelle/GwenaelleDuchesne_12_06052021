import { useOutletContext } from "react-router-dom";
import { ReactComponent as Energy } from 'assets/energy.svg'
import { ReactComponent as Chicken } from 'assets/chicken.svg'
import { ReactComponent as Apple } from 'assets/apple.svg'
import { ReactComponent as Cheeseburger } from 'assets/cheeseburger.svg'

function KeyData() {
    const {calorieCount, proteinCount, carbohydrateCount, lipidCount} = useOutletContext();
    return (
        <div>
            <div>
                <span><Energy /></span>
                <span>{calorieCount || 0}kCal</span><p>Calories</p>
            </div>
            <div>
                <span><Chicken /></span>
                <span>{proteinCount || 0}g</span><p>Proteines</p>
            </div>
            <div>
                <span><Apple /></span>
                <span>{carbohydrateCount  || 0}g</span><p>Glucides</p>
            </div>
            <div>
                <span><Cheeseburger /></span>
                <span>{lipidCount  || 0}g</span><p>Lipides</p>
            </div>                        
        </div>
    )
}

export default KeyData