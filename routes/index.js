const express = require("express");
const { append } = require("express/lib/response");
const router = express.Router();
const createError = require("http-errors");
const guitarData = require("../public/data/guitar-data.js");

const baseUrl = "localhost:3000";

/* GET home page. */
router.get("/", (req, res, next) => {
  const searchTerm = req.body.search;
  const searchTermTrimmed = searchTerm;
  res.render("index", { guitarData, searchTermTrimmed });
});

router.get("/search", (req, res, next) => {
  const sortTerm = req.query.sort;
  const searchTerm = req.query.q;
  const searchTermTrimmed = searchTerm
    .trim()
    .replaceAll(".", "")
    .replaceAll("'", "")
    .replaceAll("-", "")
    .replaceAll('"', "")
    .toLocaleLowerCase();
  req.query.q = encodeURI(searchTermTrimmed);

  const searchResults = guitarData.filter(
    ({ searchName, materials: { topwood }, bodysize } = guitar) => {
      if (!searchTermTrimmed) {
        return;
      } else {
        return (
          searchName.toLocaleLowerCase().includes(searchTermTrimmed) ||
          topwood.toLocaleLowerCase().includes(searchTermTrimmed) ||
          bodysize.toLocaleLowerCase().includes(searchTermTrimmed)
        );
      }
    }
  );
  res.render("search", { results: searchResults, searchTermTrimmed, sortTerm });
});

module.exports = router;
