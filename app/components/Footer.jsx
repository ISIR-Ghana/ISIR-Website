import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-sky-950 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* ISIR Address */}
            <div>
                <h3 className="text-lg font-bold mb-4">ISIR Ghana</h3>
                <p className="text-gray-400">Tamale, <br /> Northern Region 00233, GH</p>
            </div>

            {/* Social Media Links */}
            <div>
                <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                    {/* LinkedIn */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                    {/* Facebook */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </Link>
                </div>
            </div>

            {/* Donor Acknowledgment Policy */}
            <div>
                <h3 className="text-lg font-bold mb-4">Policy</h3>
                <Link href="/donor-policy" className="text-gray-400 hover:text-white">Donor Acknowledgment Policy</Link>
            </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
          <p>Copyright &copy; 2025 ISIR Ghana. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
