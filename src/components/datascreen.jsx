import React, { useState } from "react";
import "./data.css";

function SemesterForm() {
  const [step, setStep] = useState(0);
  const [semesterGroup, setSemesterGroup] = useState("135"); // Default semester group
  const [subjects, setSubjects] = useState({
    1: [{ code: "", teacher: "", hours: "", type: "theory" }],
    3: [{ code: "", teacher: "", hours: "", type: "theory" }],
    5: [{ code: "", teacher: "", hours: "", type: "theory" }],
    2: [{ code: "", teacher: "", hours: "", type: "theory" }],
    4: [{ code: "", teacher: "", hours: "", type: "theory" }],
    6: [{ code: "", teacher: "", hours: "", type: "theory" }],
  });

  const handleChange = (semester, index, field, value) => {
    const updated = { ...subjects };
    updated[semester][index][field] = value;
    setSubjects(updated);
  };

  const addSubject = (semester) => {
    const updated = { ...subjects };
    updated[semester].push({ code: "", teacher: "", hours: "", type: "theory" });
    setSubjects(updated);
  };

  const removeSubject = (semester, index) => {
    const updated = { ...subjects };
    updated[semester] = updated[semester].filter((_, i) => i !== index);
    setSubjects(updated);
  };

  const handleSubmit = () => {
    console.log("Saved Subjects:", subjects);
    alert("Subjects saved! Check the console.");
  };

  const getSemesters = () => {
    if (semesterGroup === "135") return [1, 3, 5];
    if (semesterGroup === "246") return [2, 4, 6];
    return [];
  };

  return (
    <div className="dataroot min-h-screen flex items-center justify-center p-4">
      <div className="frosted-backdrop rounded-2xl shadow-2xl p-8 w-full max-w-5xl bg-white/10 backdrop-blur-lg border border-white/30">
        <h2 className="text-3xl font-bold mb-8 text-center drop-shadow">
          Semester Form
        </h2>

        {step === 0 && (
          <div className="space-y-4">
            <label className="block text-lg font-semibold">
              Select Semester Group:
            </label>
            <select
              value={semesterGroup}
              onChange={(e) => setSemesterGroup(e.target.value)}
              className="w-full p-3 rounded custom-select"
            >
              <option value="135">1, 3, 5 - Odd Semesters</option>
              <option value="246">2, 4, 6 - Even Semesters</option>
            </select>

            <button
              onClick={() => setStep(1)}
              className="mt-3 px-4 py-2 bg-green-600 text-white rounded hover:scale-110 transition"
            >
              Continue
            </button>
          </div>
        )}

        {step === 1 && (
          <>
            <h3 className="text-2xl font-semibold mb-6">
              {semesterGroup === "135" ? "Odd" : "Even"} Semesters
            </h3>

            {getSemesters().map((semester) => (
              <div key={semester}>
                <h4 className="text-xl font-semibold mt-4 mb-2">
                  Semester {semester}
                </h4>

                {subjects[semester].map((subj, idx) => (
                  <div key={idx} className="flex items-center space-x-4 mb-4">
                    <input
                      type="text"
                      placeholder="Subject Code"
                      value={subj.code}
                      onChange={(e) => handleChange(semester, idx, "code", e.target.value)}
                      className="p-2 bg-white/20 text-black placeholder:text-gray-600 rounded w-1/5"
                    />
                    <input
                      type="text"
                      placeholder="Teacher Name"
                      value={subj.teacher}
                      onChange={(e) => handleChange(semester, idx, "teacher", e.target.value)}
                      className="p-2 bg-white/20 text-black placeholder:text-gray-600 rounded w-1/4"
                    />
                    <input
                      type="number"
                      placeholder="Hours"
                      value={subj.hours}
                      onChange={(e) => handleChange(semester, idx, "hours", e.target.value)}
                      className="p-2 bg-white/20 text-black placeholder:text-gray-600 rounded w-1/6"
                      min="0"
                    />
                    <select
                      value={subj.type}
                      onChange={(e) => handleChange(semester, idx, "type", e.target.value)}
                      className="p-2 rounded w-1/4"
                    >
                      <option value="theory">Theory</option>
                      <option value="practical">Practical</option>
                    </select>
                    {subjects[semester].length > 1 && (
                      <button
                        onClick={() => removeSubject(semester, idx)}
                        className="text-red-400 hover:text-red-600 text-xl font-bold"
                        title="Remove"
                      >
                        ❌
                      </button>
                    )}
                  </div>
                ))}

                <div className="flex justify-evenly mt-6">
                  <button
                    onClick={() => setStep(0)}
                    className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:scale-110 transition"
                  >
                    Previous
                  </button>

                  <button
                    onClick={() => addSubject(semester)}
                    className="mt-3 px-4 py-2 bg-green-600 text-white rounded hover:scale-110 transition"
                  >
                    Add Subject
                  </button>
                </div>
              </div>
            ))}

            <div className="flex justify-evenly mt-6">
              <button
                onClick={handleSubmit}
                className="mt-3 px-4 py-2 bg-green-600 text-white rounded hover:scale-110 transition"
              >
                Save All
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default SemesterForm;
