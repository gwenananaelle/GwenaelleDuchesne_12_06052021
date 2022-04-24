import AverageSession from 'models/AverageSession'

/**
 * Convert json to AverageSession
 * @class AverageSessionsMapper
 */
export default class AverageSessionsMapper {
    static convertToAverageSessions(json) {
        const sessions = json.sessions.map((session) => {
            const weekday = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
            const sessionLength = session.sessionLength
            const day = weekday[session.day - 1]
            return new AverageSession({ sessionLength, day })
        })
        return sessions
    }
}
