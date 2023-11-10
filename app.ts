import express from 'express';

const app = express();

// app.post('/api/notes', (request, response) => {
//   const body = request.body;

//   if (body.content === undefined) {
//     return response.status(400).json({ error: 'content missing' });
//   }

//   const note = new Note({
//     content: body.content,
//     important: body.important || false,
//   });

//   const savedNote = await note.save();
//   response.json(savedNote);
// });

export default app;
