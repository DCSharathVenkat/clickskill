import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail } from "lucide-react"

const offices = [
  {
    country: "United States",
    city: "New York",
    address: "123 Business Ave, Suite 100, New York, NY 10001",
    phone: "+1 (555) 123-4567",
    email: "usa@clickskill.io",
    isHQ: true,
    timezone: "EST",
  },
  {
    country: "India",
    city: "Bangalore",
    address: "Tech Park, Electronic City, Bangalore, Karnataka 560100",
    phone: "+91 80 1234 5678",
    email: "india@clickskill.io",
    isHQ: false,
    timezone: "IST",
  },
  {
    country: "Australia",
    city: "Sydney",
    address: "456 Harbor Bridge Rd, Sydney, NSW 2000",
    phone: "+61 2 1234 5678",
    email: "australia@clickskill.io",
    isHQ: false,
    timezone: "AEST",
  },
  {
    country: "Singapore",
    city: "Singapore",
    address: "789 Marina Bay, Singapore 018956",
    phone: "+65 1234 5678",
    email: "singapore@clickskill.io",
    isHQ: false,
    timezone: "SGT",
  },
  {
    country: "Canada",
    city: "Toronto",
    address: "321 CN Tower St, Toronto, ON M5V 3A8",
    phone: "+1 (416) 123-4567",
    email: "canada@clickskill.io",
    isHQ: false,
    timezone: "EST",
  },
  {
    country: "UAE",
    city: "Dubai",
    address: "Burj Khalifa District, Dubai, UAE",
    phone: "+971 4 123 4567",
    email: "uae@clickskill.io",
    isHQ: false,
    timezone: "GST",
  },
]

export function GlobalPresence() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate mb-6">
            Global Presence, Local Expertise
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            With offices across six countries, we provide 24/7 support and local expertise to serve our global clientele
            with cultural understanding and technical excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offices.map((office, index) => (
            <Card
              key={office.country}
              className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-sm ${
                office.isHQ ? "ring-2 ring-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5" : "bg-white"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate mb-1 group-hover:text-primary transition-colors">
                      {office.country}
                    </h3>
                    <p className="text-neutral-600 font-medium">{office.city}</p>
                    {office.isHQ && (
                      <span className="inline-block mt-2 text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                        Headquarters
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-neutral-500 bg-neutral-100 px-2 py-1 rounded">{office.timezone}</div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-neutral-600 leading-relaxed">{office.address}</p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                    <a
                      href={`tel:${office.phone}`}
                      className="text-sm text-neutral-600 hover:text-primary transition-colors"
                    >
                      {office.phone}
                    </a>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                    <a
                      href={`mailto:${office.email}`}
                      className="text-sm text-neutral-600 hover:text-primary transition-colors"
                    >
                      {office.email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full">
            <div className="w-3 h-3 bg-primary rounded-full mr-3 animate-pulse" />
            <span className="text-slate font-medium">Available 24/7 across all time zones</span>
          </div>
        </div>
      </div>
    </section>
  )
}
