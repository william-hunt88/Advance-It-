const {Show} = require("../../models");
const sequelize = require("../../config/connection");
const router = require("express").Router();

router.get("/", (req, res) => {
  Show.findAll({}).then((dbPostData) => res.json(dbPostData));
});

router.post("/", (req, res) => {
  Show.create({
    date: req.body.date,
    band_name: req.body.band_name,
    load_in: req.body.load_in,
    extra_deets: req.body.extra_deets,
    soundcheck: req.body.soundcheck,
    input_list: req.body.input_list,
    stage_plot: req.body.stage_plot,
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  Show.update({
    load_in: req.body.load_in,
    extra_deets: req.body.extra_deets,
    soundcheck: req.body.soundcheck,
    input_list: req.body.input_list,
    stage_plot: req.body.stage_plot,
  },{
    where: {
      id: req.params.id,
    }
  },
  )
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// router.get("/:id", (req, res) => {
//   Show.findOne({
//     where: {
//       id: req.params.id
//     }
//   }).then((dbShowData) => {
//     if (!dbShowData) {
//       res.status(404).json({message: "No shows found with this id"})
//       return
//     }
//     res.json(dbShowData)
//   })
// })

module.exports = router;
