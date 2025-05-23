const LayoutFooter = () => {
    return (
        <footer className="bg-background sticky bottom-0 p-4 border-t border-[#33ff339e] text-center text-xs text-[#24d524db]">
            <p>&copy; {new Date().getFullYear()} Jason Koogler - Made with a CRT Monitor</p>
        </footer>
    )
}

export default LayoutFooter