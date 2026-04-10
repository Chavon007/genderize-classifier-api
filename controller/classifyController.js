import { sendName } from "../service/classifyService.js";

export const sendNameController = async (req, res) => {
  try {
    const name = req.query.name;
    if (!name) {
      return res
        .status(400)
        .json({ status: "error", message: "Name parameter is missing" });
    }
    if (name.trim() === "") {
      return res
        .status(400)
        .json({ status: "error", message: "Name parameter can't be empty" });
    }

    if (typeof name !== "string") {
      return res
        .status(422)
        .json({ status: "error", message: "Please name must be a string" });
    }

    const send = await sendName(name);
    if (send.gender === null || send.count === 0) {
      return res.status(400).json({
        status: "error",
        message: "No prediction available for the provided name",
      });
    }

    const is_confident = send.probability >= 0.7 && send.count >= 100;

    res.status(200).json({
      status: "success",
      data: {
        name: send.name,
        gender: send.gender,
        probability: send.probability,
        sample_size: send.count,
        is_confident,
        processed_at: new Date().toISOString(),
      },
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};
