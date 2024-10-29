import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // Inject Botpress webchat script on component mount
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.botpress.cloud/webchat/v0/inject.js';
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://mediafiles.botpress.cloud/a538db67-38c3-41f1-bd9e-3597cb545c93/webchat/config.js';
    script2.defer = true;
    document.body.appendChild(script2);

    // Clean up scripts when the component unmounts
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return null; // No custom button, we only use Botpress's default chat icon now
};

export default Chatbot;
