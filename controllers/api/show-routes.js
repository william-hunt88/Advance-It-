const {Show, Comment, User} = require("../../models");
const sequelize = require("../../config/connection");
const router = require("express").Router();

router.get("/", (req, res) => {
  Show.findAll({
    include: [
      {
        model: User,
        attributes: ["username"],
      },
      {
        model: Comment,
        attributes: ["id", "comment_text", "show_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username", "band_name"],
        },
      },
    ],
  }).then((dbPostData) => res.json(dbPostData));
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
    user_id: req.session.user_id,
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

module.exports = router;
