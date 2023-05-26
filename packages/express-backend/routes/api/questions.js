const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Question = require("../../Models/Question");

//api/questions

router.get("/", async (req, res) => {
  try {
    const question = await Question.find();

    if (!question) {
      return res.status(404).json({
        status: "error",
        message: "No Questions",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        question,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Something went wrong",
    });
  }
});

//API requesting for question

router.post("/question", (req, res) => {
  const number = req.body.number;

  if (number) {
    Question.findOne({ number: req.body.number })
      .then((question) => {
        if (question) {
          return res.status(200).json({
            status: "success",
            data: {
              question,
            },
          });
        }
      })
      .catch((err) => console.log(err));
  } else {
    return res.status(404).json({
      status: "error",
      message: "No number selected",
    });
  }
});

//POST

router.post("/addquestion", (req, res) => {
  const date = Date.now(); // yyyy-mm-dd.
  const number = req.body.number;
  const questionz = req.body.question;
  const name = req.body.name;
  const optiona = req.body.optiona;
  const optionb = req.body.optionb;
  const optionc = req.body.optionc;
  const optiond = req.body.optiond;

  if (questionz) {
    Question.findOne({ number: req.body.number })
      .then((question) => {
        if (question) {
          return res.status(400).json({ question: "Question number exists" });
        } else {
          const newQuestion = new Question({
            date: date,
            number: number,
            question: questionz,
            name: name,
            optiona: optiona,
            optionb: optionb,
            optionc: optionc,
            optiond: optiond,
          });
          newQuestion
            .save()

            .then(
              res.status(200).json({
                status: "success",
                data: {
                  newQuestion,
                },
              })
            )
            .catch((err) => console.log(`error from router ${err}`));
        }
      })
      .catch((err) => console.log(err));
  } else {
    return res.status(404).json({
      status: "error",
      message: "Nos item selected",
    });
  }
});

//UPDATE

router.put("/updatequestion/:questionId", (req, res) => {
  const { questionId } = req.params;
  const { question, optiona, optionb, optionc, optiond } = req.body;

  console.log(req.params);
  console.log(req.body);

  Question.findOneAndUpdate(
    questionId,
    { question, optiona, optionb, optionc, optiond },
    { new: true }
  )
    .then((updatedQuestion) => {
      if (!updatedQuestion) {
        return res.status(404).send({ error: "Question not found" });
      }
      res.send(updatedQuestion);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send({ error: "Internal server error" });
    });
});

//DELETE

router.delete("/:id", (req, res) => {
  Question.findOneAndDelete(req.params.id) //we would get id from the URL
    .then((deletedquestion) => {
      console.log(deletedquestion);
    })
    .catch((err) => res.status(404).json(json({ success: false })));
});

module.exports = router;
