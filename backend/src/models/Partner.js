const mongoose = require("mongoose");

const partnerSchema = new mongoose.Schema(
    {
        organization: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Organization",
            required: true
        },

        name: {
            type: String,
            required: true,
            trim: true,
            minlength: 2,
            maxlength: 150
        },

        type: {
            type: String,
            enum: ["client", "vendor"],
            required: true
        },

        contactName: {
            type: String,
            trim: true,
            maxlength: 100
        },

        contactEmail: {
            type: String,
            trim: true,
            lowercase: true
        },

        contactPhone: {
            type: String,
            trim: true
        },

        website: {
            type: String,
            trim: true
        },

        status: {
            type: String,
            enum: ["active", "inactive"],
            default: "active"
        }
    },
    {
        timestamps: true
    }
);

partnerSchema.index(
    { organization: 1, name: 1, type: 1 },
    { unique: true }
);
projectSchema.index({ organization: 1 });
module.exports = mongoose.model("Partner", partnerSchema);