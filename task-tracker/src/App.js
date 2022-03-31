import Header from "./components/Header";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Start learning Node",
      day: "Feb 7th at 2:45pm",
      reminder: false,
    },
  ]);

  //Add Task
  const onAdd = async (task) => {
    const res = await fetch("http://localhost:3001/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    setTasks([...tasks, data]);
    // console.log(task);
    // const newTask = { id: tasks.length + 1, ...task };
    // setTasks([...tasks, newTask]);
  };

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  //*Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:3001/tasks");
    const data = await res.json();

    return data;
  };

  //!Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:3001/tasks/${id}`);
    const data = await res.json();

    return data;
  };

  //Delete Task

  const deleteTask = async (id) => {
    await fetch(`http://localhost:3001/tasks/${id}`, {
      method: "DELETE",
    });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:3001/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });

    const data = await res.json();
    setTasks(
      tasks.map((task) =>
        task.id !== id ? task : { ...task, reminder: data.reminder }
      )
    );
  };

  return (
    <Router>
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />

        <Route
          path="/"
          exact
          render={({ props }) => (
            <>
              {showAddTask && <AddTask onAdd={onAdd} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                "No tasks to show"
              )}
            </>
          )}
        />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
