export default function PageIllustration() {
  return (
    <div
      className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
      aria-hidden="true"
    >
      <div className="h-80 w-80 rounded-full bg-gradient-to-tr from-indigo-500/80 to-purple-500/80 blur-3xl opacity-20" />
    </div>
  );
}
