import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ProjectsSection = () => {
    const projects = [
        {
            title: 'EduHealth – Unified Education & Healthcare Platform',
            description: 'A comprehensive full-stack platform that seamlessly connects doctors and tutors with users through an integrated booking and payment system. Features role-based access control, secure authentication, and real-time booking status updates.',
            image: '🏥',
            technologies: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
            features: [
                'Role-based access control for different user types',
                'Secure authentication and authorization',
                'Real-time booking status tracking',
                'Integrated payment processing',
                'Responsive design for all devices'
            ],
            githubUrl: '#',
            liveUrl: '#'
        },
        {
            title: 'Personal Portfolio & Blog Platform',
            description: 'A modern, mobile-responsive personal website showcasing projects, technical blogs, and professional certifications. Built with a custom markdown blog system and integrated email notifications.',
            image: '📝',
            technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'NodeMailer'],
            features: [
                'Markdown-based blog system',
                'Email integration with NodeMailer',
                'CI/CD pipeline deployment',
                'SEO optimized content',
                'Mobile-first responsive design'
            ],
            githubUrl: '#',
            liveUrl: '#'
        },
        {
            title: 'Online Food Ordering System',
            description: 'A responsive web application for digital food ordering with comprehensive order tracking capabilities. Features a clean interface built with modern web technologies and a normalized database schema.',
            image: '🍽️',
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'Java', 'MySQL'],
            features: [
                'Real-time order tracking system',
                'Normalized database schema design',
                'User-friendly ordering interface',
                'Admin dashboard for order management',
                'Responsive design across devices'
            ],
            githubUrl: '#',
            liveUrl: '#'
        }
    ];

    return (
        <section id="projects" className="py-20 bg-muted/30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Featured Projects</h2>
                    <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
                    <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
                        A showcase of my development work, highlighting technical skills and problem-solving abilities
                    </p>
                </div>

                <div className="grid gap-8">
                    {projects.map((project, index) => (
                        <Card key={index} className="card-gradient overflow-hidden">
                            <div className="grid lg:grid-cols-3 gap-0">
                                {/* Project Image/Icon */}
                                <div className="lg:col-span-1 bg-gradient-secondary/20 flex items-center justify-center p-8">
                                    <div className="text-8xl">{project.image}</div>
                                </div>

                                {/* Project Details */}
                                <div className="lg:col-span-2">
                                    <CardHeader>
                                        <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                                        <p className="text-muted-foreground">{project.description}</p>
                                    </CardHeader>

                                    <CardContent className="space-y-6">
                                        {/* Technologies */}
                                        <div>
                                            <h4 className="font-semibold mb-3">Technologies Used</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.map((tech, techIndex) => (
                                                    <Badge key={techIndex} variant="secondary">
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Key Features */}
                                        <div>
                                            <h4 className="font-semibold mb-3">Key Features</h4>
                                            <ul className="space-y-2">
                                                {project.features.map((feature, featureIndex) => (
                                                    <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                        <ArrowRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-4 pt-4">
                                            <Button variant="outline" size="sm" className="group" asChild>
                                                <a href={project.githubUrl} className="flex items-center gap-2">
                                                    <Github size={16} className="group-hover:text-primary transition-colors" />
                                                    View Code
                                                </a>
                                            </Button>
                                            <Button size="sm" className="bg-gradient-primary text-white group" asChild>
                                                <a href={project.liveUrl} className="flex items-center gap-2">
                                                    <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                                                    Live Demo
                                                </a>
                                            </Button>
                                        </div>
                                    </CardContent>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12">
                    <p className="text-lg text-muted-foreground mb-6">
                        Want to see more of my work or collaborate on a project?
                    </p>
                    <Button
                        size="lg"
                        className="bg-gradient-primary text-white hover:opacity-90 transition-opacity"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Let's Connect
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;