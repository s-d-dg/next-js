export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      !name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    // only to simulate server errors
    if (message.includes("error")) {
      res.status(500).json({ message: "Some server error example" });
    }

    // Store it in a databasenmdfkckjkfnslvm,sp;fnmc
    const newMessage = {
      email,
      name,
      message,
    };

    console.log(newMessage);
    res
      .status(201)
      .json({ message: "Successfully stored message!", message: newMessage });
  }
}
