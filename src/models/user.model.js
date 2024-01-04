const users = [
    {
        id: 1,
        name: "Phước"
    },
    {
        id: 2,
        name: "Toàn"
    }
]
export default {
    findMany: () => {
        return users
    },
    findById: (userId) => {
        return users.find(user => user.id == userId)
    }
}