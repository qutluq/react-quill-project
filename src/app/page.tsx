"use client";
import { useRef, useState } from "react";

import { Button } from "@/components/button";
import { TextEditor } from "@/components/quill-editor";

import type { MouseEvent } from "react";
import type ReactQuill from "react-quill";

const App = () => {
  const [value, setValue] = useState("");
  const quillRef = useRef<ReactQuill>(null);

  function handleClick(event: MouseEvent<HTMLAnchorElement>): void {
    event.preventDefault();
    quillRef.current?.editor?.root.setAttribute("spellcheck", "false");
  }

  return (
    <div className="flex flex-col">
      <TextEditor
        forwardedRef={quillRef}
        value={value}
        onChange={setValue}
        className="h-[256px]"
      />
      {value}
      <Button href="" onClick={handleClick} title={"focus"} />
    </div>
  );
};

export default App;
