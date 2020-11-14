`use strict`

import bcrypt from 'bcrypt';

export function updatePassword(password) {
    console.log('in update password')
    let salt = bcrypt.genSaltSync(10)
    let hash = bcrypt.hashSync(password, salt)
    return hash
}
