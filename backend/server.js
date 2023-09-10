import app from "./app.mjs";
import connectDB from "./config/database.mjs";

connectDB()

app.listen(
    process.env.PORT, () => {
        console.log(
            `Server running on port ${process.env.PORT}`
        );
    }
)