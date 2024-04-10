import { Author } from "@prisma/client";

export default function AuthorCard({ author }: { author: Author }) {
  return (
    <div className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 dark:bg-slate-900 dark:border-gray-700">
      <div className="flex items-center gap-x-4">
        <img
          className="rounded-full size-20"
          src="https://images.unsplash.com/photo-1514222709107-a180c68d72b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
          alt="Image Description"
        />
        <div className="grow">
          <h3 className="font-medium text-gray-800 dark:text-gray-200">
            {author.name}
          </h3>
          <p className="text-sm text-gray-500">Bla bla bla</p>
        </div>
      </div>

      <p className="mt-3 text-gray-500">{author.bio}</p>
    </div>
  );
}
