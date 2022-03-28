    async function fetchUser(id) {
      try {
        const response = await fetch(`http://localhost:3000/user/${id}`)
        if (response.ok) {
            const { data }  = await response.json()
            console.log(data)
            return data
        } else {
            const data = await response.text()
            console.log(data)
            return data
        }
      } catch (err) {
        console.log(err)
      }
    }

export default fetchUser