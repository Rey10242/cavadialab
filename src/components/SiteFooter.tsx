import React from "react";

const SiteFooter: React.FC = () => {
  return (
    <footer className="bg-secondary border-t border-border py-8 px-4 md:px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-heading text-sm tracking-[0.1em] text-muted-foreground">
          REYNALDO MONTALVO
        </span>
        <span className="text-[0.62rem] text-muted-foreground tracking-wider">
          © {new Date().getFullYear()} · Reynaldo Montalvo Cavadia · Cartagena, Colombia
        </span>
      </div>
    </footer>
  );
};

export default SiteFooter;
