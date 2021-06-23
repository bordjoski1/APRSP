import {db} from '../firebase'

export const DrinksService = {

    getAll: async() => {
        const response = db.collection('drinks')
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

export default DrinksService