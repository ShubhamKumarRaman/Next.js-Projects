export default function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-4 py-4 text-sm text-gray-600 text-center">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </div>
    </footer>
  );
}