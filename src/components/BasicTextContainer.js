import React from 'react';

function BasicTextContainer({ text, custom }) {
  return (
    <p className={`text-start mt-2  px-12   font-medium mb-2 ${custom}`}>
      {text}
    </p>
  );
}

export default BasicTextContainer;
