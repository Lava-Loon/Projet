const prisma = require("./prismaClient");

exports.createNote = async (req, res) => {
  const note = await prisma.note.create({
    data: {
      title: req.body.title,
      content: req.body.content
    } 
  });

   res.json(note);
};

exports.getNotes = async (req, res) => {
  const notes = await prisma.note.findMany();

  res.json(notes);
};

exports.updateNote = async (req, res) => {
  const note = await prisma.note.update({
    where: {
      id: req.params.id
    },

    data: {
      title: req.body.title,
      content: req.body.content
    }
  });

  res.json(note);
};

exports.deleteNote = async (req, res) => {
  await prisma.note.delete({
    where: {
      id: req.params.id
    }
  });

  res.json({
    message: "Note supprimée"
  });
}