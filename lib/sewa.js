const fs = require('fs')
const toMs = require('ms')

const addSewaGroup = (gid, expired, _dir) => {
    const obj = { id: gid, expired: Date.now() + toMs(expired), status: true }
    _dir.push(obj)
    fs.writeFileSync('./core/database/sewa.json', JSON.stringify(_dir))
}

// Get Sewa
const getSewaPosition = (gid, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === gid) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

// Get Sewa Expired
const getSewaExpired = (gid, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === gid) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].expired
    }
}

// Check Sewa
const checkSewaGroup = (gid, _dir) => {
    let status = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === gid) {
            status = true
        }
    })
    return status
}

// Expired Check
const expiredCheck = (xfar, _dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            console.log(`Sewa expired: ${_dir[position].id}`)
            if (_dir[position].status === true){
                    xfar.groupLeave(_dir[position].id)
                        _dir.splice(position, 1)
                        fs.writeFileSync('./core/database/sewa.json', JSON.stringify(_dir))
            }
        }
    }, 1000)
}

module.exports = {
    addSewaGroup,
    getSewaPosition,
    getSewaExpired,
    checkSewaGroup,
    expiredCheck
}
