import mongoose  from "mongoose";


const cardSchema = mongoose.Schema({
      name: String,
      imgUrl: String
});

const Card = mongoose.model("Cards",cardSchema);
// mongoose.model() takes two args: collection name and schema .
// so "Cards" is the collection name and cardSchema is the schema we have created above.

export default Card



