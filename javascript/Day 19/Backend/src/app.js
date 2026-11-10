const express = requrie('express');
const app = express();
const authRouter = requrie("./routes/auth.routes");

app.use(express.json());

app.use('/auth',authRouter);

module.export = app;