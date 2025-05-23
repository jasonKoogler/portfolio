export default function Footer() {
    return (
        <footer className="bg-background sticky bottom-0 p-4 border-t border-[#33ff33] text-center text-xs text-[#24d524db]">
            <p>&copy; {new Date().getFullYear()} Jason Koogler - Made with a CRT Monitor</p>
        </footer>
    );
}