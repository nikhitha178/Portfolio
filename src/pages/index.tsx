import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';

function index() {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
            </main>

            {/* Footer */}
            <footer className="py-8 border-t border-border bg-muted/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <p className="text-muted-foreground">
                            © 2024 Nikhitha Janapana. Built with React, TypeScript, and Tailwind CSS.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Index;
