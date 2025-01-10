import React, { useState, forwardRef, useImperativeHandle } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill's default styling

// Define Props and Methods for the Editor
interface RichTextEditorProps {
  value?: string; // Initial value for the editor
  onChange?: (content: string) => void; // Callback for value change
}

export interface RichTextEditorRef {
  getContent: () => string; // Method to get editor content
  clearContent: () => void; // Method to clear the editor
}

const RichTextEditor = forwardRef<RichTextEditorRef, RichTextEditorProps>(
  ({ value = '', onChange }, ref) => {
    const [content, setContent] = useState<string>(value);

    // Expose methods to the parent using ref
    useImperativeHandle(ref, () => ({
      getContent: () => content,
      clearContent: () => setContent(''),
    }));

    const handleChange = (updatedContent: string) => {
      setContent(updatedContent);
      if (onChange) onChange(updatedContent); // Pass content to the parent
    };

    // Custom Quill toolbar configuration
    const modules = {
      toolbar: [
        [{ header: [1, 2, 3, false] }], // Headers
        ['bold', 'italic', 'underline'], // Text formatting
        [{ list: 'ordered' }, { list: 'bullet' }], // Lists
        ['link', 'image'], // Links and images
        ['clean'], // Clear formatting
      ],
    };

    return (
      <div className="bg-white">
        <ReactQuill
          value={content}
          onChange={handleChange}
          modules={modules}
          theme="snow"
          className="h-48"
        />
      </div>
    );
  }
);

export default RichTextEditor;
