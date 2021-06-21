import db from '../firebase'

export const MeatsService = {

    getAll: async() => {
        const response = db.collection('meats')
        const data = await response.get()
        return data.docs.map(doc => doc.data())
    }

}

export default MeatsService