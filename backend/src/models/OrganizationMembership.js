const mongoose = require("mongoose");

const organizationMembershipSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        organization: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Organization",
            required: true
        },

        role: {
            type: String,
            enum: ["owner", "admin", "member"],
            default: "member"
        }
    },
    {
        timestamps: true
    }
);

organizationMembershipSchema.index(
    { user: 1, organization: 1 },
    { unique: true }
);

module.exports = mongoose.model(
    "OrganizationMembership",
    organizationMembershipSchema
);