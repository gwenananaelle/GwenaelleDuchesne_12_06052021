import Performance from 'models/Performance'

/**
 * Convert json to Performance
 * @class
 */
export default class PerformanceMapper {
    static convertToPerformances(json) {
        const { data, kind: kindlist } = json
        const performances = data.map((elm) => {
            const value = elm.value
            const kind =
                kindlist[elm.kind].charAt(0).toUpperCase() +
                kindlist[elm.kind].substr(1).toLowerCase()
            return new Performance({ value, kind })
        })
        performances.reverse()
        return performances
    }
}
