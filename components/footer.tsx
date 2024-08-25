export const Footer = () => {
  return (
    <footer className="h-[72px] w-full p-4">
      <div className="flex items-center justify-center">
        <h3 className="font-semibold text-sm md:text-xl">
          &copy; {new Date().getFullYear()} Rmutt Community. Created by <a href="https://github.com/mmiiprpkr" target="_blank" rel="noopener noreferrer" className="text-primary">mmiiprpkr</a>
        </h3>
      </div>
    </footer>
  );
};