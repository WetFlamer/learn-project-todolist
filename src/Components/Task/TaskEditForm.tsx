import React from "react";

interface TaskEditFormProps {
  editValue: string;
  setEditValue: (value: string) => void;
  saveEdit: () => void;
  cancelEdit: () => void;
}

const TaskEditForm: React.FC<TaskEditFormProps> = ({ editValue, setEditValue, saveEdit, cancelEdit }) => {
  return (
    <>
      <input
        type="text"
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
      />
      <button onClick={saveEdit}>Сохранить</button>
      <button onClick={cancelEdit}>Отменить</button>
    </>
  );
};

export default TaskEditForm;
