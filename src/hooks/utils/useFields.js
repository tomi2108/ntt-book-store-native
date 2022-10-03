import { useState } from "react";

export const useFields = (obj) => {
  const [fields, setFields] = useState(obj);

  const textChange = (text,key) => {
    setFields((prev) => ({ ...prev, [key]: { ...fields[key], value: text } }));
  };

  const dateChange = (evt,date,key) => {
    if(evt.type === "set") setFields((prev) => ({ ...prev, [key]:{ ...fields[key] ,value:date }  }));
  };

  const _parseKey = (key) => {
    return key.replace(/([A-Z])/g, " $1").replace(/^./, (firstLetter) => {
      return firstLetter.toUpperCase();
    }).trim();
  };

  const validateComplete = (handleErrorMessage) => {
    let isValid = true;
    Object.keys(fields)
      .sort((a,b) => fields[b].order - fields[a].order)
      .forEach((key) => {
        if (!fields[key].value) {
          const parsedKey = _parseKey(key);
          handleErrorMessage(`Please enter ${parsedKey}`);
          isValid = false;
        }
      }
      );
    return isValid;
  };


  const reset = () => {
    setFields(obj);
  };

  return { reset, fields, textChange,dateChange, validateComplete };
};
