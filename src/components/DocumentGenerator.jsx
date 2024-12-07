import { useState } from 'react';
import GeneratedDocument from './GeneratedDocument';
import Introduction from './Introduction';

function DocumentGenerator() {
  const [formData, setFormData] = useState({
    name: '',
    contactInfo: '',
    treat: '',
    wishes: ''
  });
  const [showDocument, setShowDocument] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.wishes) {
      console.log('Bot detected');
      return;
    }

    setShowDocument(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div>
      <Introduction />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="wishes"
          value={formData.wishes}
          onChange={handleChange}
          style={{ display: 'none' }}
          tabIndex="-1"
          autoComplete="off"
        />
        <div>
          <label htmlFor="name">Who you are:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="your neighbor Sam"
            required
          />
        </div>
        <div>
          <label htmlFor="treat">Treat to expect if they don't need anything done:</label>
          <textarea
            id="treat"
            name="treat"
            value={formData.treat}
            onChange={handleChange}
            required
            placeholder="cookies, candy, a gift card, etc. A treat can even be a task. Something like: Take your batteries to battery recycling."
          />
        </div>
        <div>
          <label htmlFor="contactInfo">How to respond to this note:</label>
          <textarea
            id="contactInfo"
            name="contactInfo"
            value={formData.contactInfo}
            onChange={handleChange}
            placeholder="Text me at 555-555-5555 with your response! Please include your details and respond by Wednesday if you want a task done over this weekend!"
            required
          />
        </div>
        <button type="submit">Generate Preview</button>
      </form>

      {showDocument && <GeneratedDocument data={formData} />}
    </div>
  );
}

export default DocumentGenerator; 
