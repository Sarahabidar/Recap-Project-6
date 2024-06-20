import Place from "../../../../db/models/Place";
import dbConnect from "@/db/connect";

export default async function handler(request, response) {
  const { id } = request.query;
  await dbConnect();
  if (!id) {
    return;
  }

  //const place = places.find((place) => place.id === id);
  if (request.method === "GET") {
    try {
      const place = await Place.findById(id);
      if (!place) {
        return response.status(404).json({ status: "Not found" });
      }

      response.status(200).json(place);
    } catch (error) {
      return response
        .status(500)
        .json({ status: "Internal Server Error", error: error.message });
    }
  } else if (request.method === "PATCH") {
    try {
      const placeData = request.body;
      const updatedPlace = await Place.findByIdAndUpdate(id, placeData);

      if (!updatedPlace) {
        return response.status(404).json({ status: "Not Found" });
      }
      return response
        .status(200)
        .json({ status: `Place ${id} updated!`, place: updatedPlace });
    } catch (error) {
      return response
        .status(500)
        .json({ status: "Internal Server Error", error: error.message });
    }
  }
}
