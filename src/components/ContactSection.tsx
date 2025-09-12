import { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: 'nikithaj2005@gmail.com',
            href: 'mailto:nikithaj2005@gmail.com'
        },
        {
            icon: Github,
            label: 'GitHub',
            value: 'github.com/nikhitha178',
            href: 'https://github.com/nikhitha178'
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            value: 'linkedin.com/in/nikhithaj2005',
            href: 'https://linkedin.com/in/nikhithaj2005'
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'Hyderabad, India',
            href: null
        }
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await emailjs.send(
                'service_gkv1h8j', // Service ID
                'template_i86q9ft', // Template ID
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_name: 'Nikhitha', // Your name
                },
                'nOn82So2CWywp1-L4' // Public Key
            );

            toast({
                title: "Message sent successfully!",
                description: "Thank you for reaching out. I'll get back to you soon.",
            });

            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('EmailJS error:', error);
            toast({
                title: "Failed to send message",
                description: "Something went wrong. Please try again or contact me directly.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Let's Connect</h2>
                    <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
                    <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
                        Ready to discuss opportunities or collaborate on exciting projects?
                        I'd love to hear from you!
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                            <p className="text-muted-foreground mb-8">
                                I'm always open to discussing new opportunities, interesting projects,
                                or just having a conversation about technology and development.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {contactInfo.map((item, index) => (
                                <Card key={index} className="card-gradient">
                                    <CardContent className="p-4">
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 bg-primary/10 rounded-lg">
                                                <item.icon className="w-5 h-5 text-primary" />
                                            </div>
                                            <div>
                                                <p className="font-medium">{item.label}</p>
                                                {item.href ? (
                                                    <a
                                                        href={item.href}
                                                        target={item.href.startsWith('http') ? '_blank' : undefined}
                                                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                                        className="text-muted-foreground hover:text-primary transition-colors"
                                                    >
                                                        {item.value}
                                                    </a>
                                                ) : (
                                                    <p className="text-muted-foreground">{item.value}</p>
                                                )}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <Card className="card-gradient">
                        <CardHeader>
                            <CardTitle className="text-2xl">Send a Message</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Your full name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="bg-muted/50"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="your.email@example.com"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="bg-muted/50"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="Tell me about your project or just say hello..."
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={5}
                                        className="bg-muted/50 resize-none"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    size="lg"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-primary text-white hover:opacity-90 transition-opacity group"
                                >
                                    {isSubmitting ? (
                                        'Sending...'
                                    ) : (
                                        <>
                                            Send Message
                                            <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;