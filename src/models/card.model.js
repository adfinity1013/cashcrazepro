import mongoose, {Schema} from "mongoose";

const cardSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    subCards: [
        {
            type: Schema.Types.ObjectId,
            ref: "SubCard"
        }
    ]
}, {timestamps: true})

export const Card = mongoose.model("Card", cardSchema)