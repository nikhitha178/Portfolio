import { GraduationCap, Code, Brain, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const highlights = [
    {
      icon: Brain,
      title: 'Problem Solving',
      description: 'Analytical approach to complex technical challenges'
    },
    {
      icon: Code,
      title: 'System Design',
      description: 'Building scalable and efficient software architectures'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in team environments'
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a motivated B.Tech Information Technology student (2022–2026) with a passion for
              software development, web technologies, and data-driven applications. My journey in
              technology is driven by curiosity and a desire to solve real-world problems through code.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently seeking opportunities to apply my academic knowledge in programming,
              problem-solving, and system design to real-world projects. I'm committed to
              contributing to organizational success while continuously enhancing my technical
              expertise in modern software development practices.
            </p>

            {/* Education Card */}
            <Card className="card-gradient">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">B.Tech in Information Technology</h3>
                    <p className="text-muted-foreground">MLR Institute of Technology</p>
                    <p className="text-sm text-muted-foreground">Batch of 2026</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Highlights Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Key Strengths</h3>
            <div className="grid gap-4">
              {highlights.map((item, index) => (
                <Card key={index} className="card-gradient group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;