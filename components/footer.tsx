import { Cloud } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1C3F70] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <Cloud className="h-8 w-8 text-[#00A1E0]" />
          <p className="text-center">
            © {new Date().getFullYear()} Tarun Kumar Earle. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}