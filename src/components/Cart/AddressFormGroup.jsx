export default function AddressFormGroup({ fieldPrefix, children }) {
  return (
    <div className="bg-light p-30 mb-5">
      <div className="row">
        <div className="col-md-6 form-group">
          <label>First Name</label>
          <input
            className="form-control"
            type="text"
            placeholder="John"
            name={`${fieldPrefix}FirstName`}
          />
        </div>
        <div className="col-md-6 form-group">
          <label>Last Name</label>
          <input
            className="form-control"
            type="text"
            placeholder="Doe"
            name={`${fieldPrefix}LastName`}
          />
        </div>
        <div className="col-md-6 form-group">
          <label>E-mail</label>
          <input
            className="form-control"
            type="text"
            placeholder="example@email.com"
            name={`${fieldPrefix}Email`}
          />
        </div>
        <div className="col-md-6 form-group">
          <label>Mobile No</label>
          <input
            className="form-control"
            type="text"
            placeholder="+123 456 789"
            name={`${fieldPrefix}PhoneNumber`}
          />
        </div>
        <div className="col-md-6 form-group">
          <label>Address Line 1</label>
          <input
            className="form-control"
            type="text"
            placeholder="123 Street"
            name={`${fieldPrefix}AddressLine1`}
          />
        </div>
        <div className="col-md-6 form-group">
          <label>Address Line 2</label>
          <input
            className="form-control"
            type="text"
            placeholder="123 Street"
            name={`${fieldPrefix}AddressLine2`}
          />
        </div>
        <div className="col-md-6 form-group">
          <label>Country</label>
          <select
            defaultValue="United States"
            className="custom-select"
            name={`${fieldPrefix}Country`}
          >
            <option>United States</option>
            <option>Afghanistan</option>
            <option>Albania</option>
            <option>Algeria</option>
          </select>
        </div>
        <div className="col-md-6 form-group">
          <label>City</label>
          <input
            className="form-control"
            type="text"
            placeholder="New York"
            name={`${fieldPrefix}City`}
          />
        </div>
        <div className="col-md-6 form-group">
          <label>State</label>
          <input
            className="form-control"
            type="text"
            placeholder="New York"
            name={`${fieldPrefix}State`}
          />
        </div>
        <div className="col-md-6 form-group">
          <label>ZIP Code</label>
          <input
            className="form-control"
            type="text"
            placeholder="123"
            name={`${fieldPrefix}ZipCode`}
          />
        </div>
        {children}
      </div>
    </div>
  );
}
