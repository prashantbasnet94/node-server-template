let
    mongooseLocal = require('mongoose'),
    {Schema} = mongooseLocal


module.exports = function(conn) {

    const User = new Schema({
        email: {
            type: String,
            required: true,
            index: true
        },
        username: String,
        password: String,
        age: Number,
        gender: String,
        birthday: String,
        name: String,
        role: Number,
        verified: Boolean,
        blocked: Boolean,
        banned: Boolean,
        active: Boolean,
        picture: String,
        favouriteList: Array,
        likedList: Array,
        SAT_SCORE: {
            math: Number,
            english: Number

        },
        ACT_SCORE: {
            math: Number,
            english: Number

        },
        LOCATION: {
            zip: String,
            city: String,
            state: String
        },
        BUDGET: {
            inState: {
                underGraduate: {
                    averageTuitionFullTime: Number,
                    perCreditHour: Number
                },
                graduate: {
                    averageTuitionFullTime: Number,
                    perCreditHour: Number
                }
            },
            outState: {
                underGraduate: {
                    averageTuitionFullTime: Number,
                    perCreditHour: Number
                },
                graduate: {
                    averageTuitionFullTime: Number,
                    perCreditHour: Number
                }
            },
            inDistrict: {
                underGraduate: {
                    averageTuitionFullTime: Number,
                    perCreditHour: Number
                },
                graduate: {
                    averageTuitionFullTime: Number,
                    perCreditHour: Number
                }
            }
        },
        deactivated: {
            type: Boolean,
            deactivated: false
        },
        admin: {
            type: Boolean,
            default: false
        }
    })
    conn.model('User', User)
}
