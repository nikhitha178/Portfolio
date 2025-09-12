import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile-image.jpg';

const HeroSection = () => {
    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
            {/* Enhanced Background Elements */}
            <div className="absolute inset-0">
                {/* Floating Particles */}
                <div className="absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full animate-ping delay-100"></div>
                <div className="absolute top-40 right-20 w-3 h-3 bg-secondary/30 rounded-full animate-ping delay-300"></div>
                <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-accent/30 rounded-full animate-ping delay-500"></div>
                <div className="absolute bottom-20 right-10 w-2.5 h-2.5 bg-primary/20 rounded-full animate-ping delay-700"></div>

                {/* Gradient Orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-secondary/5 to-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-br from-accent/5 to-primary/5 rounded-full blur-2xl animate-pulse delay-500"></div>

                {/* Geometric Shapes */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full animate-spin" style={{ animationDuration: '30s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-secondary/10 rounded-full animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border-2 border-accent/20 rounded-full animate-pulse"></div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="h-full w-full bg-grid-pattern"></div>
                </div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center space-y-12">
                    {/* Enhanced Profile Image */}
                    <div className="relative mx-auto w-56 h-56 mb-12">
                        {/* Dynamic Floating Elements */}
                        <div className="absolute -top-6 -left-6 w-4 h-4 bg-primary/30 rounded-full animate-bounce delay-300"></div>
                        <div className="absolute -top-3 -right-8 w-3 h-3 bg-secondary/30 rounded-full animate-bounce delay-700"></div>
                        <div className="absolute -bottom-6 -right-6 w-5 h-5 bg-accent/30 rounded-full animate-bounce delay-500"></div>
                        <div className="absolute -bottom-3 -left-8 w-2 h-2 bg-primary/40 rounded-full animate-bounce delay-900"></div>

                        {/* Orbiting Elements */}
                        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s' }}>
                            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                        </div>
                        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '10s', animationDirection: 'reverse' }}>
                            <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-1.5 h-1.5 bg-gradient-to-r from-secondary to-accent rounded-full"></div>
                        </div>

                        {/* Enhanced Border Frame */}
                        <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-tr from-primary/30 via-secondary/30 to-accent/30 animate-spin" style={{ animationDuration: '8s' }}>
                            <div className="w-full h-full rounded-full bg-background shadow-inner"></div>
                        </div>

                        {/* Profile Image */}
                        <img
                            src={profileImage}
                            alt="Nikhitha Janapana - Software Developer"
                            className="relative z-10 w-full h-full rounded-full object-cover shadow-2xl animate-scale-in hover:scale-105 transition-transform duration-300"
                        />

                        {/* Multi-layered Glow */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/10 to-secondary/10 blur-xl scale-110 -z-10"></div>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-bl from-accent/10 to-primary/10 blur-2xl scale-125 -z-20"></div>
                    </div>

                    {/* Enhanced Main Content */}
                    <div className="space-y-6">
                        <div className="space-y-3">
                            {/* Smaller Name with Enhanced Effects */}
                            <h1 className="text-3xl md:text-5xl font-bold animate-fade-in tracking-tight relative">
                                <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent hover:from-accent hover:via-primary hover:to-secondary transition-all duration-1000">
                                    Nikhitha Janapana
                                </span>
                                {/* Subtle underline effect */}
                                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>
                            </h1>

                            {/* Smaller Subtitle with Interactive Elements */}
                            <div className="relative">
                                <p className="text-lg md:text-xl text-muted-foreground animate-slide-in font-medium">
                                    <span className="relative group">
                                        <span className="text-primary font-semibold hover:text-primary/80 transition-colors cursor-default">Aspiring Software Developer</span>
                                        <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/30 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                                    </span>
                                    <span className="mx-2 text-muted-foreground/50">|</span>
                                    <span className="relative group">
                                        <span className="text-secondary font-semibold hover:text-secondary/80 transition-colors cursor-default">IT Student</span>
                                        <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-secondary/30 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                                    </span>
                                    <span className="mx-2 text-muted-foreground/50">|</span>
                                    <span className="relative group">
                                        <span className="text-accent font-semibold hover:text-accent/80 transition-colors cursor-default">Problem Solver</span>
                                        <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent/30 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                                    </span>
                                </p>
                            </div>
                        </div>

                        {/* Enhanced Description */}
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in leading-relaxed relative">
                            <span className="relative z-10">
                                Passionate about creating
                                <span className="text-primary font-medium hover:text-primary/80 transition-colors"> innovative solutions</span> with modern web technologies,
                                <span className="text-secondary font-medium hover:text-secondary/80 transition-colors"> data-driven applications</span>, and bringing
                                <span className="text-accent font-medium hover:text-accent/80 transition-colors"> ideas to life</span> through code.
                            </span>
                            {/* Background decoration */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-muted/5 to-transparent rounded-lg -z-10"></div>
                        </p>
                    </div>

                    {/* Enhanced Social Links */}
                    <div className="flex justify-center gap-6 animate-bounce-in">
                        <Button variant="outline" size="lg" className="group relative overflow-hidden border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10" asChild>
                            <a
                                href="mailto:nikithaj2005@gmail.com"
                                className="flex items-center gap-3 relative z-10"
                            >
                                <Mail size={22} className="group-hover:text-primary transition-colors group-hover:scale-110 duration-200" />
                                <span className="font-medium">Email</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            </a>
                        </Button>

                        <Button variant="outline" size="lg" className="group relative overflow-hidden border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10" asChild>
                            <a
                                href="https://github.com/nikhitha178"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 relative z-10"
                            >
                                <Github size={22} className="group-hover:text-secondary transition-colors group-hover:scale-110 duration-200" />
                                <span className="font-medium">GitHub</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            </a>
                        </Button>

                        <Button variant="outline" size="lg" className="group relative overflow-hidden border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10" asChild>
                            <a
                                href="https://linkedin.com/in/nikhithaj2005"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 relative z-10"
                            >
                                <Linkedin size={22} className="group-hover:text-accent transition-colors group-hover:scale-110 duration-200" />
                                <span className="font-medium">LinkedIn</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            </a>
                        </Button>
                    </div>

                    {/* Enhanced CTA Button */}
                    <div className="pt-12">
                        <Button
                            size="lg"
                            onClick={scrollToAbout}
                            className="relative px-8 py-4 bg-gradient-to-r from-primary via-secondary to-accent text-white hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 glow-effect group text-lg font-semibold hover:scale-105"
                        >
                            <span className="relative z-10 flex items-center">
                                Discover My Journey
                                <ArrowDown size={22} className="ml-3 group-hover:translate-y-1 transition-transform duration-200" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-secondary/80 to-accent/80 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-primary/20 to-secondary/20 rounded-lg animate-pulse -z-20"></div>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Enhanced Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="relative group cursor-pointer" onClick={scrollToAbout}>
                    <div className="w-8 h-12 border-2 border-primary/40 rounded-full flex justify-center bg-background/50 backdrop-blur-sm group-hover:border-primary/60 transition-colors">
                        <div className="w-1.5 h-4 bg-gradient-to-b from-primary to-secondary rounded-full mt-2 animate-pulse group-hover:animate-none"></div>
                    </div>
                    <div className="absolute -inset-2 border border-primary/20 rounded-full animate-ping group-hover:animate-pulse"></div>
                    <div className="absolute -inset-4 border border-primary/10 rounded-full animate-ping delay-300 group-hover:animate-pulse"></div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;