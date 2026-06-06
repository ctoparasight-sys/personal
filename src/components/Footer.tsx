export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto text-center text-sm text-muted">
        <p>&copy; {new Date().getFullYear()} Ido Bachelet. All rights reserved.</p>
      </div>
    </footer>
  );
}
