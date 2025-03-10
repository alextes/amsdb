import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";

/* eslint-disable react/jsx-key */

export const Code = ({ codeString, language }) => {
  return (
    <Highlight {...defaultProps} code={codeString} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

/* eslint-enable react/jsx-key */
