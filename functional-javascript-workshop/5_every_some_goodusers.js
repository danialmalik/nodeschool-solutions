function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function (submittedUser, index, array) {
      return goodUsers.some(function (goodUser, index, array) {
        return submittedUser.id == goodUser.id;
      })
    })
  };
}

module.exports = checkUsersValid
