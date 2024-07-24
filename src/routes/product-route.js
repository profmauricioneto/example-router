const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');

router.get('/', controller.get);
router.post('/', controller.post);

router.get("/:id", controller.getById);
router.put("/:id", controller.put);
router.delete("/:id", controller.delete);
router.get("*", (req, res) => {
  res.send("secret route! but has nothing...", 404);
});
 
module.exports = router;