import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { stringify } from "postcss";
import { useEffect, useState } from "react";
import {
  BiBold,
  BiItalic,
  BiStrikethrough,
  BiCode,
  BiListUl,
  BiListOl,
  BiParagraph,
  BiHeading,
} from "react-icons/bi";

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex g mr-2apx-3 transition-all duration-150 mb-2">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`group hover:bg-neutral-50 rounded-md mr-2 px-3 transition-all duration-150 ${
          editor.isActive("bold") ? "bg-neutral-50 text-neutral-900" : ""
        }`}
      >
        <BiBold className="group-hover:text-neutral-900" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={`group hover:bg-neutral-50 rounded-md mr-2 px-3 transition-all duration-150 ${
          editor.isActive("italic") ? "bg-neutral-50 text-neutral-900" : ""
        }`}
      >
        <BiItalic className="group-hover:text-neutral-900" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={`group hover:bg-neutral-50 rounded-md mr-2 px-3 transition-all duration-150 ${
          editor.isActive("strike") ? "bg-neutral-50 text-neutral-900" : ""
        }`}
      >
        <BiStrikethrough className="group-hover:text-neutral-900" />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={`group hover:bg-neutral-50 rounded-md mr-2 px-3 transition-all duration-150 ${
          editor.isActive("code") ? "bg-neutral-50 text-neutral-900" : ""
        }`}
      >
        <BiCode className="group-hover:text-neutral-900" />
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={`group hover:bg-neutral-50 rounded-md mr-2 px-3 transition-all duration-150 ${
          editor.isActive("paragraph") ? "bg-neutral-50 text-neutral-900" : ""
        }`}
      >
        <BiParagraph className="group-hover:text-neutral-900" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={` flex items-center group hover:bg-neutral-50 rounded-md mr-2 px-3 transition-all duration-150 ${
          editor.isActive("heading", { level: 1 })
            ? "bg-neutral-50 text-neutral-900"
            : ""
        }`}
      >
        <BiHeading className="group-hover:text-neutral-900" />
        <span className="text-xs font-bold group-hover:text-neutral-900">
          1
        </span>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={` flex items-center group hover:bg-neutral-50 rounded-md mr-2 px-3 transition-all duration-150 ${
          editor.isActive("heading", { level: 2 })
            ? "bg-neutral-50 text-neutral-900"
            : ""
        }`}
      >
        <BiHeading className="group-hover:text-neutral-900" />
        <span className="text-xs font-bold group-hover:text-neutral-900">
          2
        </span>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={` flex items-center group hover:bg-neutral-50 rounded-md mr-2 px-3 transition-all duration-150 ${
          editor.isActive("heading", { level: 3 })
            ? "bg-neutral-50 text-neutral-900"
            : ""
        }`}
      >
        <BiHeading className="group-hover:text-neutral-900" />
        <span className="text-xs font-bold group-hover:text-neutral-900">
          3
        </span>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`group hover:bg-neutral-50 rounded-md mr-2 px-3 transition-all duration-150 ${
          editor.isActive("bulletList") ? "bg-neutral-50 text-neutral-900" : ""
        }`}
      >
        <BiListUl className="group-hover:text-neutral-900 w-6 h-6" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`group hover:bg-neutral-50 rounded-md mr-2 px-3 transition-all duration-150 ${
          editor.isActive("orderedList") ? "bg-neutral-50 text-neutral-900" : ""
        }`}
      >
        <BiListOl className="group-hover:text-neutral-900 w-6 h-6" />
      </button>
    </div>
  );
};

const Tiptap = () => {
  const [state, setState] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("tiptap");
    console.log(saved);
    if (saved) {
      setState(saved);
    }
  }, []);

  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class:
          "prose-neutral prose-pre:p-5 prose-pre:rounded-lg prose-pre:mt-4 prose-code:text-teal-300 prose-pre:bg-neutral-900 prose-ul:list-disc prose-ul:ml-6 prose-ol:list-decimal prose-ol:ml-6 prose-h1:text-4xl prose-h2:font-bold prose-h2:text-2xl prose-h3:font-bold prose-h3:text-xl prose-li:m-0 prose-p:m-1 max-w-none border bg-neutral-800 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-0 text-neutral-50",
      },
    },
    content: state,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setState(html);
      localStorage.setItem("tiptap", html);
    },
  });

  return (
    <>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </>
  );
};

export default Tiptap;
