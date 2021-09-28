// require neccessary modules
const app = require("express")()

import info from './controllers/info';
import audioStream from './controllers/audioStream';


// Routes
app.get("/info", info)
app.get("/stream/:videoId", audioStream)


const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Running on ${PORT}`))