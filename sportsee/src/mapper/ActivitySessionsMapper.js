import ActivitySession from 'models/ActivitySession'

/**
 * Convert json to ActivitySession
 * @class
 */
export default class ActivitySessionsMapper {
    static convertToActivitySessions(json) {
        const sessions = json.sessions.map((session) => {
            const day = new Date(session.day).getDate()
            const { kilogram, calories } = session
            return new ActivitySession({ day, kilogram, calories })
        })
        return sessions
    }
}
