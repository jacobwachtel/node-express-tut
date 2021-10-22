const express = require('express')
const router = express.Router()
const {
   getPeople,
   creatPerson,
   createPersonPost,
   updatePerson,
   deletePerson
} = require('../constrollers/people')

// *** Individual Routes

// router.get('/', getPeople) 
// router.post('/', creatPerson)
// router.post('/postman', createPersonPost)
// router.put('/:id', updatePerson) 
// router.delete('/:id', deletePerson)


// *** Chained Methods

router.route('/').get(getPeople).post(creatPerson)
router.route('/postman').post(createPersonPost)
router.route('/:id').put(updatePerson).delete(deletePerson)



module.exports = router
