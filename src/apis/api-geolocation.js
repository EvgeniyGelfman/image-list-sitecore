const getCurrentPosition = () => {
    return new Promise(function(resolve, reject) {
        window.navigator.geolocation.getCurrentPosition(
            (position) => resolve([position.coords.latitude, position.coords.longitude]),
            (err) => reject(err.message)
        )
    })
}

export default getCurrentPosition;