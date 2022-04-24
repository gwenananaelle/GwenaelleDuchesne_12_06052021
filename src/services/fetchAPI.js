async function fetchData(url) {
    try {
        const response = await fetch(url)
        if (response.ok) {
            const { data } = await response.json()
            return data
        } else {
            const data = await response.text()
            return data
        }
    } catch (err) {
        console.log(err)
    }
}
/**
 * Fetch data from http://localhost:3000/user/${id}
 * @param {Number} id
 * @returns {Object}
 */
async function fetchUser(id) {
    return await fetchData(`http://localhost:3000/user/${id}`)
}
/**
 * Fetch data from http://localhost:3000/user/${id}/activity
 * @param {Number} id
 * @returns {Object}
 */
async function fetchActivity(id) {
    return await fetchData(`http://localhost:3000/user/${id}/activity`)
}
/**
 * Fetch data from http://localhost:3000/user/${id}/average-sessions
 * @param {Number} id
 * @returns {Object}
 */
async function fetchSessions(id) {
    return await fetchData(`http://localhost:3000/user/${id}/average-sessions`)
}
/**
 * Fetch data from http://localhost:3000/user/${id}/performance
 * @param {Number} id
 * @returns {Object}
 */
async function fetchPerformance(id) {
    return await fetchData(`http://localhost:3000/user/${id}/performance`)
}

export { fetchUser, fetchActivity, fetchSessions, fetchPerformance }
