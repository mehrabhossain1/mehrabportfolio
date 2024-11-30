import React from "react";
import Link from "next/link";

const DashboardPage = () => {
  return (
    <div className="flex h-[80vh] bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 shadow-md h-full">
        <div className="p-6 text-gray-800 dark:text-gray-100">
          <h2 className="text-lg font-bold">Dashboard</h2>
        </div>
        <nav className="mt-4">
          <ul className="space-y-2">
            <li>
              <Link
                href="/dashboard"
                className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/posts"
                className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
              >
                Posts
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/settings"
                className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
              >
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          This is DashboardPage
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Here you can manage your data and post updates.
        </p>
        {/* Add your form or data posting functionality here */}
        <form className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
              placeholder="Enter title"
            />
          </div>
          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Content
            </label>
            <textarea
              id="content"
              rows="5"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
              placeholder="Write your content here"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </main>
    </div>
  );
};

export default DashboardPage;
