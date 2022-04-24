/**
 * creates a new User
 * @class User
 */
export default class User {
    constructor({ id, firstName, score, keyData }) {
        this.userId = id
        this.firstName = firstName
        this.score = score
        this.keyData = keyData
    }
}
