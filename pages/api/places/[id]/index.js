import Place from "../../../../db/models/Place";
import dbConnect from "@/db/connect";

export default async function handler(request, response) {
  const { id } = request.query;
  await dbConnect();
  if (!id) {
    return;
  }

  //const place = places.find((place) => place.id === id);
  const place = await Place.findById(id);
  if (!place) {
    return response.status(404).json({ status: "Not found" });
  }

  response.status(200).json(place);
}
