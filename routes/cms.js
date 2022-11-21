const express = require("express");
const router = express.Router();

const contentful = require("contentful");

const client = contentful.createClient({
  space: "ug3e191wtmcr",
  accessToken: "PoLYfSsbHooSSeEDZgm6mDQIY-XSz4iEj56hXXvThi0",
  host: "preview.contentful.com",
});

getPDFArticle = (req, res) => {
  client
    .getEntries({
      content_type: "pdf",
      select: "fields",
    })
    .then((entries) => res.send(entries))
    .catch(console.error);
};

getArticles = (req, res) => {
  client
    .getEntries({
      content_type: "article",
      select: "fields",
    })
    .then((entries) => res.send(entries))
    .catch(console.error);
};
getVideos = (req, res) => {
  client
    .getEntries({
      content_type: "video",
      select: "fields",
    })
    .then((entries) => res.send(entries))
    .catch(console.error);
};

getCarouselArticle = (req, res) => {
  client
    .getEntries({
      content_type: "carousel",
      select: "fields",
    })
    .then((entries) => res.send(entries))
    .catch(console.error);
};

getPDFArticleById = (req, res) => {
  client
    .getEntry(req.params.id)
    .then((entry) => res.send(entry))
    .catch(console.error);
};

getSpaceModel = (req, res) => {
  client
    .getContentTypes()
    .then((response) => res.send(response.items))
    .catch(console.error);
};

router.get("/pdf", getPDFArticle.bind(this));
router.get("/video", getVideos.bind(this));
router.get("/article", getArticles.bind(this));
router.get("/carousel", getCarouselArticle.bind(this));
router.get("/:id", getPDFArticleById.bind(this));

module.exports.cmsRoutes = router;
