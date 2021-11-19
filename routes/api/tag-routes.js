const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

// get all tags
router.get("/", async (req, res) => {
  try {
    const allTags = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(allTags);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get tag by id
router.get("/:id", async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!tagData) {
      res.status(404).json({ message: "No tag found with this id!" });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new tag
router.post("/", async (req, res) => {
  try {
    const newTag = await Tag.create(req.body);
    res.status(200).json(newTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update tag by id
router.put("/:id", (req, res) => {
  Tag.update(
    {
      tag_name: req.body.category,
    },
    {
      where: {
        tag_id: req.params.id,
      },
    }
  )
    .then((updateTag) => {
      res.json(updateTag);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// delete tag by id
router.delete("/:id", async (req, res) => {
  try {
    const deleteTag = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deleteTag) {
      res.status(404).json({ message: "No tag found with this id!" });
      return;
    }
    res.status(200).json(deleteTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
