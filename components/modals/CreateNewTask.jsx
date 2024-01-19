import React, { useState } from "react";
import Input from "../Input";
import Tasks from "../Tasks";

const CreateNewTask = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [titleArr, setTitleArr] = useState([]);
  const [summaryArr, setSummaryArr] = useState([]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSummaryChange = (e) => {
    setSummary(e.target.value);
  };

  const handleCreateTask = () => {
    setTitleArr([...titleArr, title]);
    setSummaryArr([...summaryArr, summary]);
    setTitle("");
    setSummary("");
    document.getElementById("my_modal_2").close();
  };

  const handleClearAllTasks = () => {
    setTitleArr([]);
    setSummaryArr([]);
  };

  return (
    <div>
      <div className="flex justify-center items-center text-center mt-4">
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          Create New Task
        </button>
      </div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h2 className="font-bold text-lg border-b-2 text-center">
            Create new task
          </h2>
          <Input
            title={"Title"}
            value={title}
            onChange={handleTitleChange}
            placeholder={"Type Here"}
          />
          <Input
            title={"Summary"}
            value={summary}
            onChange={handleSummaryChange}
            placeholder={"Type Here"}
          />
          <div className="flex justify-end mt-auto">
            <button onClick={handleCreateTask} className="btn">
              Create Task
            </button>
          </div>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <div className="tasks-container">
        <Tasks
          titleArr={titleArr}
          summaryArr={summaryArr}
          setTitleArr={setTitleArr}
          setSummaryArr={setSummaryArr}
        />
      </div>
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={handleClearAllTasks}
          className="btn btn-outline btn-error"
        >
          Clear All Tasks
        </button>
      </div>
    </div>
  );
};

export default CreateNewTask;
