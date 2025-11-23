export default function Footer() {
  return (
    <footer className="w-full bg-card border-t border-border mt-12 shadow-md animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          <div className="animate-fadeIn" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 shadow-md">
                <img
                  src="https://i.ibb.co/rG8yDddq/doxingdotlifelogogeniune888175141.png"
                  alt="Doxing Dot Life Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-foreground">Doxing Dot Life</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              A comprehensive database for doxing information sharing
            </p>
          </div>
          <div className="animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              📂 Categories
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-accent transition-colors">
                🌍 By Country
              </li>
              <li className="hover:text-accent transition-colors">
                🏙️ By City
              </li>
              <li className="hover:text-accent transition-colors">
                🖥️ By Server
              </li>
            </ul>
          </div>
          <div className="animate-fadeIn" style={{ animationDelay: "0.3s" }}>
            <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              ⭐ Features
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-accent transition-colors">
                🔎 Advanced Search
              </li>
              <li className="hover:text-accent transition-colors">
                📊 Comprehensive Database
              </li>
              <li className="hover:text-accent transition-colors">
                🔄 Regular Updates
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-6 text-center text-xs sm:text-sm text-muted-foreground">
          <p>&copy; 2024 Doxing Dot Life. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
