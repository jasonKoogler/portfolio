const LayoutFooter = () => {
    return (
        <footer className="bg-background sticky bottom-0 p-4 border-t border-primary text-center text-xs text-primary">
            <p>&copy; {new Date().getFullYear()} Jason Koogler - Made with a CRT Monitor</p>
        </footer>
    )
}

export default LayoutFooter