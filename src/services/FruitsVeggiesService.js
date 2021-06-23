import {db} from '../firebase'

export const FruitsVeggiesService = {

    getAll: async() => {
        const response = db.collection('fruitsVeggies')
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

export default FruitsVeggiesService