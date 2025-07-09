import { generateMetadata } from "@/lib/seo"
import ConsultationClientPage from "./ConsultationClientPage"

export const metadata = generateMetadata({
  title: "Schedule a Free Consultation | ClickSkill",
  description:
    "Get expert advice on your AI and digital transformation projects. Schedule a free consultation with our technology specialists today.",
  keywords: ["consultation", "AI consulting", "digital transformation", "technology advice", "free consultation"],
  canonical: "/consultation",
})

export default function ConsultationPage() {
  return <ConsultationClientPage />
}
