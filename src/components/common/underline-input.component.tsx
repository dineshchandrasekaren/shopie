import React, {
  useRef,
  useEffect,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

// Define common props for both input and textarea
export interface IUnderLineInputCommon {
  color?: string;
  underlineStyle?:
    | "solid"
    | "ridge"
    | "hidden"
    | "double"
    | "dotted"
    | "groove"
    | "dashed";
  className?: string;
  textarea?: boolean;
  defaultWidth?: string;
  onChange: (
    target:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

// Extend input and textarea specific attributes
type IUnderLineInput = IUnderLineInputCommon &
  (
    | InputHTMLAttributes<HTMLInputElement>
    | TextareaHTMLAttributes<HTMLTextAreaElement>
  );

const UnderLineInput: React.FC<IUnderLineInput> = ({
  color = "#7ee2d0",
  underlineStyle = "groove",
  className = "",
  textarea = false,
  defaultWidth = "100%",
  onChange,
  ...props
}) => {
  // Separate refs for input and textarea
  const inputRef = useRef<HTMLInputElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  // Function to resize the input/textarea based on its content
  const resizeInput = () => {
    if (textarea && textareaRef.current) {
      textareaRef.current.style.width = defaultWidth;
      textareaRef.current.style.height = "auto"; // Reset height to auto to adjust correctly
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    } else if (!textarea && inputRef.current) {
      const inputValueLength = inputRef.current.value.length;
      const placeholderLength = inputRef.current.placeholder?.length || 0;
      const width = Math.max(inputValueLength, placeholderLength) || 1;
      inputRef.current.style.width = width > 10 ? width + "ch" : "10ch";
    }
  };

  // Input change handler
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    resizeInput(); // Resize input
    event.target;
    onChange(event);
  };

  // Textarea change handler
  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    resizeInput(); // Resize textarea
    onChange(event);
  };

  // Set the initial width when the component mounts
  useEffect(() => {
    resizeInput(); // Call resizeInput initially after the component is mounted
  }, []);

  const commonAttributes = {
    className: `${className} reset-input placeholder:italic  max-w-full overflow-hidden ${
      !textarea ? "placeholder:text-center" : "word-wrap h-fitcontent"
    } italic`,
    style: {
      borderBottom: `2px ${underlineStyle} ${color}`,
      maxWidth: "100%", // Ensure it doesn't overflow
      boxSizing: "border-box", // Include padding and border in the element's total width and height
    },
    id: "underline-input",
    defaultValue: "",
    ...props,
  };

  // Conditional rendering based on `textarea` prop
  return textarea ? (
    <textarea
      ref={textareaRef}
      onChange={handleTextareaChange}
      {...(commonAttributes as TextareaHTMLAttributes<HTMLTextAreaElement>)}
    />
  ) : (
    <input
      ref={inputRef}
      onChange={handleInputChange}
      {...(commonAttributes as InputHTMLAttributes<HTMLInputElement>)}
    />
  );
};

export default UnderLineInput;
