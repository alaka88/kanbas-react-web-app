import React, { ChangeEvent, useState } from 'react';
import ReactQuill from 'react-quill';

interface QuestionProps {
  question: Question;
  onChange: (updatedQuestion: Question) => void;
  onDelete: () => void;
  onSave: (updatedQuestion: Question) => void;
}

interface Question {
  id: string;
  title: string;
  type: 'multiple_choice' | 'true_false' | 'fill_in_the_blank';
  points: number;
  options?: string[];
  description: string; 
  correctOptionIndex?: number; // Add a field to track the correct option index
}

const Question: React.FC<QuestionProps> = ({ question, onChange, onSave }) => {
  const [isEditing, setIsEditing] = useState(true);

  const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange({ ...question, type: e.target.value as Question['type'] });
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange({ ...question, title: e.target.value });
    
  };

  const handlePointsChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange({ ...question, points: parseInt(e.target.value, 10) || 0 });
  };

  const handleOptionChange = (index: number, value: string) => {
    const options = [...(question.options || [])];
    options[index] = value;
    onChange({ ...question, options });
  };

  const addOption = () => {
    onChange({ ...question, options: [...(question.options || []), ''] });
  };

  const deleteOption = (index: number) => {
    const options = [...(question.options || [])];
    options.splice(index, 1);
    onChange({ ...question, options });
  };

  const handleCorrectOptionChange = (index: number) => {
    onChange({ ...question, correctOptionIndex: index });
  };
  const handleDescriptionChange = (value: string) => {
    onChange({ ...question, description: value });
  };
  
  
  return (
    <div className="border border-dark p-2 mb-2 mt-4">
      {isEditing ? (
        <div>
        <div className="d-flex justify-content-between  mb-2">
          <input
            type="text"
            className="form-control"
            value={question.title}
            onChange={handleTitleChange}
            placeholder="Question Title"
            style={{ width: '200px' }}
          />
          <select className="form-select" value={question.type} onChange={handleTypeChange} style={{ width: '200px' }}>
            <option value="multiple_choice">Multiple Choice</option>
            <option value="true_false">True/False</option>
            <option value="fill_in_the_blank">Fill in the Blank</option>
          </select>
        </div>
        <div className="mb-2">
            <p style={{ textAlign: 'left' }}>Enter your question and multiple answers,then select the one correct answer.</p>
            <ReactQuill
              value={question.description || ''}
              onChange={handleDescriptionChange}
              placeholder="Enter description here..."
              style={{ height: '200px', border: '1px solid #ced4da', borderRadius: '0.25rem' }}
            />
          </div>
        {question.type === 'multiple_choice' && (
          <div>
            {question.options?.map((option, index) => (
              <div key={index} className="input-group mb-2">
                <div className="input-group-text">
                  <input
                    type="radio"
                    name="correctOption"
                    checked={index === question.correctOptionIndex}
                    onChange={() => handleCorrectOptionChange(index)}
                  />
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    value={option}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                    placeholder={`Option ${index + 1}`}
                  />
                  <button className="btn btn-danger" onClick={() => deleteOption(index)}>Delete</button>
                </div>
              ))}
              <button className="btn btn-light border border-dark" onClick={addOption}>
                + Add Option
              </button>
            </div>
          )}
           <div className="d-flex align-items-center mb-2">
          <span className="input-group-text">Points:</span>
          <input
            type="number"
            className="form-control"
            value={question.points}
            onChange={handlePointsChange}
            style={{ width: '100px', marginLeft: '10px' }} 
          />
        </div>
      <div className="d-flex justify-content-end">
        <button className="btn btn-secondary me-2" onClick={() => setIsEditing(false)}>Preview</button>
        <button className="btn btn-danger" onClick={() => onSave(question)}>Save</button>
      </div>
    </div>
  ) : (
        <div>
          <h5>{question.title}</h5>
          {question.type === 'multiple_choice' && (
            <ul>
              {question.options?.map((option, index) => (
                <li key={index}>{option}</li>
              ))}
            </ul>
          )}
          <p>Points: {question.points}</p>
          <button className="btn btn-secondary" onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Question;

