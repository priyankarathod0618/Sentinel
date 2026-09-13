const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            minlength: 2,
            maxlength: 150
        },

        description: {
            type: String,
            trim: true,
            maxlength: 1000
        },

        organization: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Organization",
            required: true
        },

        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        type: {
            type: String,
            enum: ["internal", "client", "research"],
            default: "internal"
        },

        status: {
            type: String,
            enum: ["planning", "active", "on_hold", "completed", "cancelled"],
            default: "planning"
        },

        startDate: {
            type: Date,
            required: true
        },

        targetDate: {
            type: Date,
            required: true
        },

        methodology: {
            type: String,
            enum: ["scrum", "kanban", "waterfall", "hybrid"],
            default: "scrum"
        }
    },
    {
        timestamps: true
    }
);
projectSchema.index({ organization: 1 });
module.exports = mongoose.model("Project", projectSchema);