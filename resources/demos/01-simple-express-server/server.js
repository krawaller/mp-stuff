import express from 'express';
import DATA from './courses';
//SHOW_IN_SLIDE_START_11
let app = express();
//SHOW_IN_SLIDE_START_1
app.get('/', (req, res) => {
  res.status(200).json(DATA.map((course,idx) => ({
    id: idx,
    name: course.name
  })));
});
//SHOW_IN_SLIDE_END_1

app.get('/:id', (req, res) => {
  res.status(200).json(DATA[req.params.id]);
});
/*SHOW_IN_SLIDE_END_11*/
// Spin the server up on localhost:8080
app.listen(8080, () => console.log('Server running on port 8080'));
