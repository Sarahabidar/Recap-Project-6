import mongoose from "mongoose";

const { Schema } = mongoose;
const placeSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String, required: true },
  mapURL: { type: String, required: true },
  escription: { type: String, required: true },
});
// this is a model... this will be for doing CRUD operations
const Place = mongoose.models.Place || mongoose.model("Place", placeSchema);
export default Place;
