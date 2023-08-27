function retrieveAllTests(token) {
    if (typeof token !== 'string') throw new Error('token is not a string')

    return fetch(`${import.meta.env.VITE_API_URL}/tests/all`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
       .then(res => {
        if (res.status === 400) {
            return res.json()
                .then(body => {

                    throw new Error(body.error)
                })

        } else if (res.status === 200) {
            return res.json()
        }
        else
            throw new Error('server error')
    })

}
export default retrieveAllTests