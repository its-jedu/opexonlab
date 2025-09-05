export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white dark:bg-gray-900 text-center px-4">
      <h1 className="text-6xl font-bold text-[#38A109] mb-4">404</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        Oops! The page you are looking for does not exist.
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-[#38A109] text-white rounded-lg hover:bg-[#2e8108] transition"
      >
        Go Back Home
      </a>
    </div>
  );
}
