const mongoose = require('mongoose');

/** 
 * @fileOverview Define the player model to database
 * */

const playerSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    Photo: String,
    Short_name: {type: String, required: true},
    Long_name: {type: String, required: true},
    Age: Number,
    Height:Number,
    Weight:Number,
    Nationality:String,
    Club:String,
    Overall:Number,
    Potential:Number,
    Value:Number,
    Preferred_Foot:String,
    International_Reputation: Number,
    Weak_Foot: Number,
    Skill_Moves:Number,
    Position:String,
    Jersey_Number:Number,
    Contract_Valid_Until:Number,
    Crossing:Number,
    Finishing:Number,
    Heading_Accuracy:Number,
    Short_Passing:Number,
    Volleys:Number,
    Dribbling:Number,
    Curve:Number,
    FK_Accuracy:Number,
    Long_Passing:Number,
    Ball_Control:Number,
    Acceleration:Number,
    Sprint_Speed:Number,
    Agility:Number,
    Reactions:Number,
    Balance:Number,
    Shot_Power:Number,
    Jumping:Number,
    Stamina:Number,
    Strength:Number,
    Long_Shots:Number,
    Aggression:Number,
    Interceptions:Number,
    Positioning:Number,
    Vision:Number,
    Penalties:Number,
    Composure:Number,
    Marking:Number,
    Standing_Tackle:Number,
    Sliding_Tackle:Number,
    GK_Diving:Number,
    GK_Handling:Number,
    GK_Kicking:Number,
    GK_Positioning:Number,
    GKReflexes:Number
});

module.exports = mongoose.model('PlayerDetails',playerSchema);  