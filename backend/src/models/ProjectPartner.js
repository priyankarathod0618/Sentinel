const mongoose = require("mongoose");

const projectPartnerSchema = new mongoose.Schema(
    {
        project: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Project",
            required: true
        },

        partner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Partner",
            required: true
        },

        role: {
            type: String,
            enum: ["client", "vendor"],
            required: true
        }
    },
    {
        timestamps: true
    }
);

projectPartnerSchema.index(
    { project: 1, partner: 1 },
    { unique: true }
);
partnerSchema.index({ organization: 1 });
module.exports = mongoose.model(
    "ProjectPartner",
    projectPartnerSchema
);