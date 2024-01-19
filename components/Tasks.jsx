import Input from "./Input";
import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";

const Tasks = ({ titleArr, summaryArr, setTitleArr, setSummaryArr }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedSummary, setEditedSummary] = useState("");

  const deleteHandleTask = (index) => {
    const newTitle = [...titleArr];
    const newSummary = [...summaryArr];
    newTitle.splice(index, 1);
    newSummary.splice(index, 1);
    setTitleArr(newTitle);
    setSummaryArr(newSummary);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedTitle(titleArr[index]);
    setEditedSummary(summaryArr[index]);
  };

  const handleSaveEdit = (index) => {
    const newTitle = [...titleArr];
    const newSummary = [...summaryArr];
    newTitle[index] = editedTitle;
    newSummary[index] = editedSummary;
    setTitleArr(newTitle);
    setSummaryArr(newSummary);
    setEditIndex(null);
  };

  const handleCancelEdit = () => {
    setEditIndex(null);
  };

  return (
    <div className="w-auto">
      <h2 className="font-bold text-3xl border-b-2 pt-4 mt-4 text-center mb-4">
        Task List
      </h2>
      {titleArr.length > 0 ? (
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-20">
          {titleArr.map((title, index) => (
            <div key={index} className="flex flex-col border-2 p-4">
              {editIndex === index ? (
                <>
                  <Input
                    title={"Title"}
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                    placeholder={"Type Here"}
                  />
                  <Input
                    title={"Summary"}
                    value={editedSummary}
                    onChange={(e) => setEditedSummary(e.target.value)}
                    placeholder={"Type Here"}
                  />
                  <div className="text-center pt-4 flex px-2">
                    <button
                      onClick={() => handleSaveEdit(index)}
                      className="btn btn-success w-40"
                    >
                      Save
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      className="btn btn-outline w-40 ml-4"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-2">
                    <strong>Title:</strong> {title}
                  </div>
                  <div>
                    <strong>Summary:</strong> {summaryArr[index]}
                  </div>
                  <div className="text-center pt-4 flex px-2">
                    <button
                      onClick={() => deleteHandleTask(index)}
                      className="btn btn-error w-40"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleEdit(index)}
                      className="btn btn-success gap-4 ml-4"
                    >
                      <BiEdit size={24} />
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">Şu an task bulunmamakta.</p>
      )}
    </div>
  );
};

export default Tasks;
