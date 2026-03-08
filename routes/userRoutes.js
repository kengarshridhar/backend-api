import express from 'express'
import { getUsers, getSpecUser, updateUser, deleteUser } from '../controllers/userController.js'
const router = express.Router();

// Define a route
router.get('/', getUsers);
router.get('/:username', getSpecUser );
router.patch('/:username', updateUser);
router.delete('/:username', deleteUser );

//     , (req, res) => {
//     res.send('this is user 101 route');// this gets executed when user visit http://localhost:3000/user/101
// });

router.get('/102', (req, res) => {
    res.send('this is user 102 route');// this gets executed when user visit http://localhost:3000/user/102
});

// export the router module so that server.js file can use it
export default router;