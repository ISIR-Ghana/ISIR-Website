export default function Donate() {
  const momo = {
    network: "MTN Mobile Money",
    name: "Abdul-Rashid Iddi",
    number: "+233 20 743 6517",
    reference: "ISIR-Donation",
  };

  const bank = {
    bank: "Example Bank Ghana Ltd.",
    name: "Institute for Sustainable and Innovative Research",
    account: "00000000",
    branch: "Tamale",
    swift: "EXAMGHACXXX",
    iban: "DE00 0000 0000 0000 0000 00",
  };

  const campaign = { target: 50000, received: 720, currency: "EUR", lastUpdated: "30 Sep 2025" };
  const progressPct = Math.min(Math.round((campaign.received / campaign.target) * 100), 100);

  return (
    <div className="min-h-screen bg-[#0b132b] bg-gradient-to-b from-[#0b132b] to-[#0f1b3d] text-[#e6f1ff]">
      <div className="max-w-6xl mx-auto p-6">
        <header className="flex items-center gap-3 mb-6">
          <img src="/images/isir-logo.png" alt="ISIR Ghana logo" className="w-10 h-10 object-contain" />
          <div>
            <div className="font-bold tracking-wide">Institute for Sustainable and Innovative Research (ISIR Ghana)</div>
            <div className="text-xs text-[#a8b3c7]">Tamale, Ghana • SDG-aligned impact</div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Left: MoMo + Bank */}
          <section className="lg:col-span-2 bg-[#1c2541] border border-white/10 rounded-2xl p-5 shadow-xl">
            <h1 className="text-2xl font-bold mb-2">Donate to ISIR Ghana</h1>
            <p className="text-[#a8b3c7]">Your contribution powers clean water, maternal health, climate action, and education. Thank you for supporting our communities.</p>

            <div className="h-3" />
            <h2 className="text-lg font-semibold">Mobile Money (MoMo)</h2>
            <ul className="divide-y divide-white/10">
              <li className="flex justify-between py-2"><span className="text-[#a8b3c7]">Network</span><span className="font-semibold">{momo.network}</span></li>
              <li className="flex justify-between py-2"><span className="text-[#a8b3c7]">Account Name</span><span className="font-semibold">{momo.name}</span></li>
              <li className="flex justify-between py-2"><span className="text-[#a8b3c7]">MoMo Number</span><span className="font-semibold">{momo.number}</span></li>
              <li className="flex justify-between py-2"><span className="text-[#a8b3c7]">Reference</span><span className="font-semibold">{momo.reference}</span></li>
            </ul>
            <p className="text-xs text-[#a8b3c7] bg-white/5 rounded-lg p-3 mt-2">
              Tip: When sending via MoMo, add your name in the reference so we can acknowledge your gift (or write “Anonymous”).
            </p>

            <div className="h-3" />
            <h2 className="text-lg font-semibold">Bank Transfer (GHS / EUR)</h2>
            <ul className="divide-y divide-white/10">
              <li className="flex justify-between py-2"><span className="text-[#a8b3c7]">Bank</span><span className="font-semibold">{bank.bank}</span></li>
              <li className="flex justify-between py-2"><span className="text-[#a8b3c7]">Account Name</span><span className="font-semibold">{bank.name}</span></li>
              <li className="flex justify-between py-2"><span className="text-[#a8b3c7]">Account No.</span><span className="font-semibold">{bank.account}</span></li>
              <li className="flex justify-between py-2"><span className="text-[#a8b3c7]">Branch</span><span className="font-semibold">{bank.branch}</span></li>
              <li className="flex justify-between py-2"><span className="text-[#a8b3c7]">SWIFT/BIC</span><span className="font-semibold">{bank.swift}</span></li>
              <li className="flex justify-between py-2"><span className="text-[#a8b3c7]">IBAN (EUR)</span><span className="font-semibold">{bank.iban}</span></li>
            </ul>

            <div className="h-3" />
            <a
              className="inline-flex items-center gap-2 bg-[#5bc0be] text-[#0b132b] font-bold px-4 py-3 rounded-xl"
              href="mailto:donate@isirghana.org?subject=Donation%20Confirmation&body=Hello%20ISIR%2C%0A%0AI%20just%20donated%20via%20MoMo/Bank.%20Please%20acknowledge.%0A%0AName%3A%0AAmount%3A%0ADate%3A%0AReference%3A%0AProject%20(optional)%3A%0A"
            >
              Send Donation Confirmation Email
            </a>
          </section>

          {/* Right: QR + progress + thanks */}
          <aside className="bg-[#1c2541] border border-white/10 rounded-2xl p-5 shadow-xl">
            <h2 className="text-lg font-semibold mb-2">Quick Pay (QR)</h2>
            <div className="grid place-items-center bg-white/5 rounded-xl p-4">
              {/* Replace with a real QR image later */}
              <svg width="180" height="180" role="img" aria-label="QR placeholder">
                <rect width="180" height="180" fill="#0b132b"></rect>
                <rect x="10" y="10" width="50" height="50" fill="#5bc0be"></rect>
                <rect x="120" y="10" width="50" height="50" fill="#5bc0be"></rect>
                <rect x="10" y="120" width="50" height="50" fill="#5bc0be"></rect>
                <rect x="60" y="60" width="60" height="60" fill="#5bc0be"></rect>
              </svg>
            </div>
            <p className="text-xs text-[#a8b3c7] mt-2">Scan to donate (configure with your bank/MoMo QR later).</p>

            <div className="h-3" />
            <h2 className="text-lg font-semibold">Current Campaign</h2>
            <div className="flex justify-between text-sm py-1"><span className="text-[#a8b3c7]">Target</span><span className="font-semibold">{campaign.currency} {campaign.target.toLocaleString()}</span></div>
            <div className="flex justify-between text-sm py-1"><span className="text-[#a8b3c7]">Received</span><span className="font-semibold">{campaign.currency} {campaign.received.toLocaleString()}</span></div>
            <div className="w-full bg-white/10 rounded-full h-3 mt-1 overflow-hidden" aria-label="Campaign progress">
              <div className="h-3 bg-gradient-to-r from-green-400 to-teal-300" style={{ width: `${progressPct}%` }} />
            </div>
            <div className="text-xs text-[#a8b3c7] mt-1">{progressPct}% funded • Last updated: {campaign.lastUpdated}</div>

            <div className="h-3" />
            <h2 className="text-lg font-semibold">Thank You</h2>
            <p className="text-xs text-[#a8b3c7]">
              We’re grateful to every donor. If you’d like to be acknowledged on our website, email <a className="underline" href="mailto:donate@isirghana.org">donate@isirghana.org</a> with your preferred display name (or “Anonymous”).
            </p>
          </aside>
        </div>
      </div>
    </div>
  );
}
