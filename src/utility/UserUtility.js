export const UserUtility = {
    isLoggedIn: function() {
        let islogged = localStorage.getItem('UserID');
        return islogged !== null && islogged !== '';
    }
}

export default UserUtility
