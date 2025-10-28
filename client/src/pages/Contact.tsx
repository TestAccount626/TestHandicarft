import ContactForm from "@/components/ContactForm";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <div className="bg-muted py-12">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-center" data-testid="text-contact-title">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
            Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-3">
            <ContactForm />
          </div>

          <div className="md:col-span-2 space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-semibold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <Card className="p-4">
                  <div className="flex gap-4">
                    <div className="bg-primary/10 rounded-md p-3 h-fit">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Address</h3>
                      <p className="text-sm text-muted-foreground" data-testid="text-address">
                        123 Artisan Street<br />
                        Craft District, CD 12345
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="flex gap-4">
                    <div className="bg-primary/10 rounded-md p-3 h-fit">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <p className="text-sm text-muted-foreground" data-testid="text-phone">
                        +1 (555) 123-4567
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="flex gap-4">
                    <div className="bg-primary/10 rounded-md p-3 h-fit">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <p className="text-sm text-muted-foreground" data-testid="text-email">
                        hello@artisan.com
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="flex gap-4">
                    <div className="bg-primary/10 rounded-md p-3 h-fit">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Business Hours</h3>
                      <div className="text-sm text-muted-foreground space-y-1" data-testid="text-hours">
                        <p>Monday - Friday: 9am - 6pm</p>
                        <p>Saturday: 10am - 4pm</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
