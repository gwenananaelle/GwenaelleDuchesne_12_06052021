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

async function fetchPerformance(id) {
    const { data, kind } = await fetchData(
        `http://localhost:3000/user/${id}/performance`
    )
    data.forEach((elm) => {
        elm.kind = kind[elm.kind]
    })
    return data
}

export { fetchUser, fetchPerformance }
