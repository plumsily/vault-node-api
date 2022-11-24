const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;

app.use(cors());

let vaults = {
  101: {
    location: "Northwestern Washington, D.C.",
    region: "Capital Wasteland",
    status: "Ongoing",
    purpose:
      "Social experiment in which Overseers were granted unlimited authority over a Vault intended to remain closed indefinitely.",
    background:
      "The original and underlying purpose of the Vault 101 experiment was to stay closed indefinitely, in order to study the role of the overseer when a Vault never opened. However, Vault 101 has been opened numerous times, violating its original mandate, and became infested by radroaches during these events. On 2277, the Lone Wanderer leaves Vault 101 into the Capital Wasteland in search of their father, who escaped during a radroach infestation.",
    game: "Fallout 3",
  },
  111: {
    location: "Sanctuary Hills, Massachusetts",
    region: "The Commonwealth",
    status: "Life systems failure - all remaining subjects deceased",
    purpose:
      "Medical experiment studying long-term effects of cryogenic stasis on unwitting subjects.",
    background:
      "Originally intended to open after 180 days upon receipt of an All-Clear Signal from Vault-Tec per standard operating procedures. No signal came from Vault-Tec and facing increasing pressure from staff over dwindling supplies, the Overseer was forced to place Vault 111 on lockdown to prevent its opening. On 2287, 210 years after first being sealed, the Sole Survivor awakens from the Vault to enter the Commonwealth in search of their lost son, taken from the Vault by Conrad Kellogg.",
    game: "Fallout 4",
  },
  76: {
    location: "North of Flatwoods, West Virginia",
    region: "Appalachia",
    status: "Success - all subjects vacated",
    purpose:
      "Vault 76 was designed to commemorate the 300 years since America's founding and slated to open to the outside world 20 years after nuclear war. The individuals within could emerge to recolonize Appalachia. This day would be known as Reclamation Day.",
    background:
      "One of 17 control Vaults, Vault 76 was deemed a special project essential to rebuilding the United States in the wake of nuclear war. The occupants were some of America's finest, including students from Vault-Tec University, military members and former White House Chief of Staff. Sealed on October 23, 2077, Reclamation Day occurred 25 years later on October 23, 2102, and the Vault Dwellers were sent to rebuild Appalachia by their overseer.",
    game: "Fallout 76",
  },
  unknown: {
    location: "unknown",
    region: "unknown",
    status: "unknown",
    purpose: "unknown",
    background: "unknown",
    game: "unknown",
  },
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/:vault", (req, res) => {
  const vaultName = req.params.vault;
  if (vaults[vaultName]) {
    res.json(vaults[vaultName]);
  } else {
    res.json(vaults["unknown"]);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
