import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Sustainability through Innovative",
};

export default function Home() {
  return (
<div>
  <div className="h-96 flex items-center justify-center">
    Hello About page.
  </div>
</div>
  );
}
