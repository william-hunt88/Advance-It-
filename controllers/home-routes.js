const router = require("express").Router();
const {Show, Comment, User} = require("../models");

router.get("/", (req, res) => {
  res.render("landing", {
    layout: "login"
  });
});

router.get("/homepage", (req, res) => {
  console.log(req.session)
  Show.findAll({

  }).then((dbShowData) => {
    const shows = dbShowData.map((show) => show.get({plain: true}));

    res.render('homepage', {
      shows,
      loggedIn: req.session.loggedIn,
    })
  })
});

router.get("/show-input", (req, res) => {
  res.render("show-input-form", {
    loggedIn: req.session.loggedIn
  })
})

router.get("/shows/:id", (req, res) => {
  Show.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "show_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username", "band_name"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  }).then((dbShowData) => {
    if (!dbShowData) {
      res.status(404).json({message: "No shows found with this id"})
      return
    }
    const shows = dbShowData.get({plain: true});

    res.render('single-show', {
      shows,
      loggedIn: req.session.loggedIn
    })
  })
})

module.exports = router;
