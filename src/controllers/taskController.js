import Task from '../models/taskModel';

class task{
 static test(req, res){
  res.send("respond with a resource");
}

 static createTask (req, res) {
  let task = new Task(
      {
          name: req.body.name,
          price: req.body.price
      }
  );

  task.save(function (err) {
      if (err) {
          return next(err);
      }
      // res.send('Task Created successfully')
      res.status(201).json({
        status: 201,
        task:task,
        message: 'Task created successfully!',
      });
  })
}

static taskDetails(req, res) {
  Task.findById(req.params.id, function (err, task) {
      if (err) {return next(err);
      }
      res.send(task);
      res.status(200).json({
        status: 200,
        Task:task,
        message: 'Task created successfully!',
      });
  })
}

static updateTask(req, res) {
  Task.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, task) {
      if (err){return next(err);
      }
      // res.send('Task udpated.');
      res.status(201).json({
        status: 201,
        Task:task,
        message: 'Task Updated successfully!',
      });
  });
}

static deleteTask(req, res) {
  Task.findByIdAndRemove(req.params.id, function (err) {
      if (err) {return next(err)
      }
      res.status(200).json({
        status: 200,
        message: 'Task Deleted successfully!',
      });
  })
}

}
export default task;