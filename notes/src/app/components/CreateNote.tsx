"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

import { api } from "~/trpc/react";

interface CreateNoteProps {
  onClose: () => void; 
}

export function CreateNote({ onClose }: CreateNoteProps) {
  const router = useRouter();
  const [content, setContent] = useState("");

  const createPost = api.post.create.useMutation({
    onSuccess: () => {
      router.refresh();
      setContent("");
      onClose();
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formattedContent = content.replace(/\n/g, "<br>");
    createPost.mutate({ name: formattedContent });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-4 rounded-md relative">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 p-2 text-gray-600 hover:text-black"
        >
          <IoCloseCircleOutline size={24} />
        </button>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 justify-center mt-10"
        >
          <textarea
            placeholder="Escreva aqui sua nota..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            maxLength={197}
            className="w-[270px] rounded-full px-4 py-2 text-black border-yellow-200 border-2 outline-none focus:border-yellow-300"
          />
          <button
            type="submit"
            className="rounded-full px-10 py-3 font-semibold transition bg-yellow-200 hover:bg-yellow-300"
            disabled={createPost.isPending}
          >
            {createPost.isPending ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </div>
    </div>
  );
}