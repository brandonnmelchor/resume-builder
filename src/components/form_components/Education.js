import React from "react";

export default class Education extends React.Component {
  render() {
    const education = this.props.education;

    return (
      <div className="w-100 d-flex flex-column gap-3">
        {education.map((entry) => (
          <EducationEntry key={entry.id} educationEntry={entry} />
        ))}
      </div>
    );
  }
}

class EducationEntry extends React.Component {
  render() {
    const { id, schoolName, degree, major, startDate, endDate } = this.props.educationEntry;

    return (
      <div className="card d-flex flex-row justify-content-between p-3">
        <div className="user-select-none">
          <div className="fw-bold">{schoolName}</div>
          <div className="fw-bold gray">
            {degree} in {major}
          </div>
          <div className="mt-3">
            {startDate} - {endDate}
          </div>
        </div>
        <div>
          <button
            type="button"
            className="btn gray px-1"
            onClick={() => {
              console.log("test");
            }}>
            <i className="bi bi-pencil-square"></i>
          </button>
          <button
            type="button"
            className="btn gray px-1"
            onClick={(event) => {
              console.log(event);
            }}>
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>
    );
  }
}

// class InputGroup extends React.Component {
//   render() {
//     const { label, type, id, value, update, length } = this.props;

//     return (
//       <div>
//         <label htmlFor={id} className="form-label fw-bold">
//           {label}
//         </label>
//         <input type={type} className="form-control" id={id} value={value} onChange={update} maxLength={length} />
//       </div>
//     );
//   }
// }
