import React from "react";

export class TextInput extends React.Component {
  render() {
    const { label, type, id, value, handleChange, length } = this.props;

    return (
      <div>
        <label htmlFor={id} className="form-label fw-bold">
          {label}
        </label>
        <input type={type} className="form-control" id={id} value={value} onChange={handleChange} maxLength={length} />
      </div>
    );
  }
}

export class TextAreaInput extends React.Component {
  render() {
    const { label, id, value, handleChange, length } = this.props;

    return (
      <div>
        {label.length > 0 && (
          <label htmlFor={id} className="form-label fw-bold">
            {label}
          </label>
        )}
        <textarea className="form-control resize-none" id={id} value={value} onChange={handleChange} maxLength={length} rows="3" />
      </div>
    );
  }
}

export class YearInput extends React.Component {
  render() {
    const { label, id, value, handleChange, disabled } = this.props;

    return (
      <div>
        <label htmlFor={id} className="form-label fw-bold">
          {label}
        </label>
        <input type="number" className="form-control" id={id} value={value} onChange={handleChange} disabled={disabled} />
      </div>
    );
  }
}

export class MonthSelectInput extends React.Component {
  render() {
    const { label, id, value, handleChange, disabled } = this.props;

    return (
      <div>
        <label htmlFor={id} className="form-label fw-bold">
          {label}
        </label>
        <select className="form-select" id={id} value={value} onChange={handleChange} disabled={disabled}>
          <option value=""></option>
          <option value="Jan">January</option>
          <option value="Feb">February</option>
          <option value="Mar">March</option>
          <option value="Apr">April</option>
          <option value="May">May</option>
          <option value="Jun">June</option>
          <option value="Jul">July</option>
          <option value="Aug">August</option>
          <option value="Sep">September</option>
          <option value="Oct">October</option>
          <option value="Nov">November</option>
          <option value="Dec">December</option>
        </select>
      </div>
    );
  }
}

export class CheckboxInput extends React.Component {
  render() {
    const { label, id, handleChange, checked } = this.props;

    return (
      <div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id={id} onChange={handleChange} checked={checked} />
          <label className="form-check-label" htmlFor={id}>
            {label}
          </label>
        </div>
      </div>
    );
  }
}
