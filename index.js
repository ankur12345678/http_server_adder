const express = require("express");
const app = express();

app.use(express.json());

app.post("/", (req, res) => {
  const a = req.body.a;
  const b = req.body.b;
  const ret_value = a + b;
  res.json({
    value: ret_value,
  });
});

app.listen(3000);
