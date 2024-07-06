import mongoose, {Schema} from "mongoose";

const subCardSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    isComplete: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})

export const SubCard = mongoose.model("SubCard", subCardSchema);