const CreatedOffers = require('../models/createdOffers')

const offerServices = {

    // create offer service for create offer on createdOffers table
    createOfferService: async (offerName, minValue, discount) => {
        try {
            const dbRes = await CreatedOffers.create({ offerName, minValue, discount })
            return dbRes
        } catch (error) {
            throw error
        }
    },

    // get offer service for getting all the offers that are already created
    getCreatedOffers: async () => {
        try {
            const dbres = await CreatedOffers.findAll()
            return dbres

        } catch (error) {
            throw error
        }
    }

}

module.exports = offerServices