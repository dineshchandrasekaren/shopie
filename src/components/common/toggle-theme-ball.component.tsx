import ToggleMode from "./toggle-theme.component";

const ToggleThemeCircle = () => {
  return (
    <div className="fixed bottom-5 right-5 bg-base-300 p-4 rounded-full w-16 h-16 border border-[var(--border-circle)]  shadow-xl hover:shadow-2xl">
      <ToggleMode />
    </div>
  );
};

export default ToggleThemeCircle;
