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
async function fetchUser(id) {
    return await fetchData(`http://localhost:3000/user/${id}`)
}
async function fetchActivity(id) {
    return await fetchData(`http://localhost:3000/user/${id}/activity`)
}
async function fetchSessions(id) {
    return await fetchData(`http://localhost:3000/user/${id}/average-sessions`)
}
async function fetchPerformance(id) {
    return await fetchData(`http://localhost:3000/user/${id}/performance`)
}

export { fetchUser, fetchActivity, fetchSessions, fetchPerformance }
