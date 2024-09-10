const express = require('express');
const router = express.Router();
const { handleRegisterUser, getDashboardManagerDetails, handleLoginUser, getDashboardCrewId, addCrewToDashBoard, deleteCrewToDashBoard, addNewBus } = require('../controllers/authController');
const { authMiddleware, managerAuthMiddleware } = require('../middlewares/authMiddleware');

// Public endpoints
router.post('/register', handleRegisterUser);
router.post('/login', handleLoginUser);

// Protected endpoints
router.get('/dashboard-manager', authMiddleware, managerAuthMiddleware, getDashboardManagerDetails);
router.get('/dashboard-crew/:id', authMiddleware, getDashboardCrewId);
router.post('/add-bus', authMiddleware, addNewBus);

router.post('/dashboard-manager/add-crew', authMiddleware, managerAuthMiddleware, addCrewToDashBoard);
router.delete('/dashboard-manager/delete-crew', authMiddleware, managerAuthMiddleware, deleteCrewToDashBoard);

module.exports = router;
