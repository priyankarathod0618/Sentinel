const mongoose = require("mongoose");

const projectMembershipSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        project: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Project",
            required: true
        },

        role: {
            type: String,
            enum: ["member", "manager"],
            default: "member"
        }
    },
    {
        timestamps: true
    }
);

projectMembershipSchema.index(
    { user: 1, project: 1 },
    { unique: true }
);

module.exports = mongoose.model(
    "ProjectMembership",
    projectMembershipSchema
);