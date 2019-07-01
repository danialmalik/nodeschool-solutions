function loadUsers(userIds, load, done) {
    var completed = 0;
    var users = [];
    userIds.forEach(function (id, index) {
        load(id, function (user) {
            users[index] = user;
            if (++completed === userIds.length) return done(users);
        })
    })
    // Found better solution online.
    return done(userIds.map(id => load(id)));
}

module.exports = loadUsers;
