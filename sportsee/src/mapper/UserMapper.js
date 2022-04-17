import User from 'models/User'

export default class UserMapper {
    static convertToUser(json) {
        const id = json.id
        const firstName = json.userInfos.firstName
        const score = json.todayScore
        const keyData = Object.keys(json.keyData).map((category) => {
            return { name: category, value: json.keyData[category] }
        })
        return new User({ id, firstName, score, keyData })
    }
}
