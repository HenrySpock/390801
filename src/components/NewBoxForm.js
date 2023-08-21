import React, { useState } from 'react';

function NewBoxForm({ addBox }) {
  const [formData, setFormData] = useState({ width: "", height: "", bgColor: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox(formData);
    setFormData({ width: "", height: "", bgColor: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({ ...formData, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="width">Width:</label>
      <input id="width" name="width" value={formData.width} onChange={handleChange} />
      
      <label htmlFor="height">Height:</label>
      <input id="height" name="height" value={formData.height} onChange={handleChange} />

      <label htmlFor="bgColor">Background Color:</label>
      <input id="bgColor" name="bgColor" value={formData.bgColor} onChange={handleChange} />
      
      <button>Add Box</button>
    </form>
  );
}

export default NewBoxForm;
