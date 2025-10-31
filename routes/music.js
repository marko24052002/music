const express = require('express');
const router = express.Router();
const musicController = require('../controllers/musicController');
const { isLoggedIn } = require('../middleware/authMiddleware');

router.get('/:category', musicController.getCategory);

router.get('/song/add', isLoggedIn, musicController.getAddSong);
router.post('/song/add', isLoggedIn, musicController.postAddSong);

router.get('/song/edit/:id', isLoggedIn, musicController.getEditSong);
router.post('/song/edit/:id', isLoggedIn, musicController.postEditSong);

router.delete('/song/delete/:id', isLoggedIn, musicController.deleteSong);

module.exports = router;