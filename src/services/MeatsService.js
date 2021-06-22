import db from '../firebase'

export const MeatsService = {

    // getAll: async() => {
    //     const response = db.collection('meats')
    //     const data = await response.get()
    //     return data.docs.map(doc => doc.data())
    // },

    getAll: async() => {
        const response = db.collection('meats')
        const data = await response.get()
        const res = []

        data.docs.map(doc => {
            res.push({id: doc.id,
                        name:doc.data().name,
                        price: doc.data().price,
                        amount: doc.data().amount})
                    })
        return res
    }

}

export default MeatsService