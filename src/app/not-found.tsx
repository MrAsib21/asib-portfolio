import Link from "next/link";
import { ScribbleUnderline } from "@/components/editorial/Doodles";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-md w-full rounded border border-[#30363D] bg-[#161B22] p-8 sm:p-10 shadow-desk-card text-center relative overflow-hidden">
        {/* Crumpled paper ball graphic in dark theme */}
        <div className="mx-auto w-28 h-28 relative flex items-center justify-center">
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full text-[#30363D] drop-shadow-md animate-float"
            aria-hidden="true"
          >
            <polygon
              points="20,30 35,15 65,18 82,32 88,55 75,82 50,88 24,78 12,54"
              fill="#21262D"
              stroke="#484F58"
              strokeWidth="2"
            />
            <path
              d="M35 15L48 45L82 32M20 30L48 45L24 78M48 45L50 88M48 45L88 55M75 82L62 60L88 55M24 78L38 62L12 54"
              stroke="#6E7681"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="mt-6 font-mono text-xs uppercase tracking-widest text-vermilion font-bold">
          Error 404 &bull; Missing Record
        </div>

        <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mt-2">
          This page got crumpled and thrown away.
        </h1>

        <div className="w-32 mx-auto my-3">
          <ScribbleUnderline className="text-vermilion" />
        </div>

        <p className="font-body text-sm text-olive leading-relaxed mt-2">
          The URL you followed doesn&apos;t exist on this workbench, or the draft was tossed into the wastebasket.
        </p>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded bg-vermilion px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-white font-semibold hover:bg-vermilion-hover transition-colors shadow-xs"
          >
            <span>Return to Workbench</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
