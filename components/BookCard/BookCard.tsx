import { Author, Book } from "@prisma/client";

export default function BookCard({
  book,
}: {
  book: Book & { author: Author };
}) {
  return (
    <div className="flex flex-col bg-white border border-gray-200 dark:border-gray-700 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
      <img
        className="w-full h-auto rounded-t-xl"
        src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
        alt="Image Description"
      />
      <div className="p-4 md:p-5">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          {book.title}
        </h3>
        <p className="mt-1 text-gray-500 dark:text-gray-400">
          {book.author.name}
        </p>
        <p className="mt-5 text-xs text-gray-500 dark:text-gray-500">
          <span className="mr-2">Views: 123</span>
          <span>Likes: 123</span>
        </p>
      </div>
    </div>
  );
}
