const express = require("express");

const router = express.Router();

const {
  createLead,
  getLeads,
  updateLead,
  deleteLead,
  searchLeads,
   getLeadStats
} = require("../controllers/leadControllers");

router.post("/", createLead);

router.get("/", getLeads);

router.get("/search", searchLeads);

router.put("/:id", updateLead);

router.delete("/:id", deleteLead);

router.get("/stats", getLeadStats);

module.exports = router;