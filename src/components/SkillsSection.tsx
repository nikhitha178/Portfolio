import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    const skillCategories = [
        {
            title: 'Programming Languages',
            icon: '💻',
            skills: [
                { name: 'Java', level: 85 },
                { name: 'Python', level: 80 },
                { name: 'JavaScript', level: 90 },
                { name: 'SQL', level: 75 },
                { name: 'C', level: 70 }
            ]
        },
        {
            title: 'Frameworks & Libraries',
            icon: '⚛️',
            skills: [
                { name: 'React.js', level: 85 },
                { name: 'Node.js', level: 80 },
                { name: 'Express.js', level: 75 },
                { name: 'Tailwind CSS', level: 90 }
            ]
        },
        {
            title: 'Databases & Tools',
            icon: '🛠️',
            skills: [
                { name: 'MySQL', level: 80 },
                { name: 'MongoDB', level: 75 },
                { name: 'Git/GitHub', level: 85 },
                { name: 'VS Code', level: 90 },
                { name: 'REST APIs', level: 80 }
            ]
        },
        {
            title: 'Core Concepts',
            icon: '🧠',
            skills: [
                { name: 'Data Structures & Algorithms', level: 80 },
                { name: 'Object-Oriented Programming', level: 85 },
                { name: 'Database Management', level: 75 },
                { name: 'Computer Networks', level: 70 }
            ]
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} id="skills" className="py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Skills & Technologies</h2>
                    <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
                    <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
                        A comprehensive overview of my technical skills and proficiency levels
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <Card key={categoryIndex} className="card-gradient">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3">
                                    <span className="text-2xl">{category.icon}</span>
                                    <span className="text-xl">{category.title}</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="font-medium">{skill.name}</span>
                                            <Badge variant="secondary" className="text-xs">
                                                {skill.level}%
                                            </Badge>
                                        </div>
                                        <div className="skill-bar">
                                            <div
                                                className="skill-progress"
                                                style={{
                                                    width: isVisible ? `${skill.level}%` : '0%',
                                                    transitionDelay: `${(categoryIndex * 4 + skillIndex) * 100}ms`
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Additional Skills */}
                <div className="mt-12 text-center">
                    <h3 className="text-2xl font-semibold mb-6">Additional Expertise</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            'Responsive Design', 'API Development', 'Version Control',
                            'Problem Solving', 'Team Collaboration', 'Agile Methodology',
                            'Code Review', 'Testing', 'Documentation', 'UI/UX Principles'
                        ].map((skill, index) => (
                            <Badge
                                key={index}
                                variant="outline"
                                className="text-sm py-2 px-4 hover:bg-primary/10 transition-colors"
                            >
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;