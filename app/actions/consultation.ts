

import { z } from "zod"

const consultationSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  company: z.string().min(1, "Company name is required"),
  projectType: z.string().min(1, "Project type is required"),
  budget: z.string().min(1, "Budget range is required"),
  timeline: z.string().min(1, "Timeline is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export async function submitConsultation(formData: FormData) {
  try {
    // Validate form data
    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      company: formData.get("company") as string,
      projectType: formData.get("projectType") as string,
      budget: formData.get("budget") as string,
      timeline: formData.get("timeline") as string,
      message: formData.get("message") as string,
    }

    const validatedData = consultationSchema.parse(data)

    // Simulate email sending (replace with actual email service)
    // For production, integrate with services like:
    // - Resend (recommended)
    // - SendGrid
    // - AWS SES
    // - Nodemailer with SMTP

    const emailContent = `
      New Consultation Request from ClickSkill Website
      
      Name: ${validatedData.firstName} ${validatedData.lastName}
      Email: ${validatedData.email}
      Phone: ${validatedData.phone}
      Company: ${validatedData.company}
      Project Type: ${validatedData.projectType}
      Budget: ${validatedData.budget}
      Timeline: ${validatedData.timeline}
      
      Message:
      ${validatedData.message}
      
      Submitted at: ${new Date().toISOString()}
    `

    // TODO: Replace this with actual email sending logic
    console.log("Email would be sent to hello@clickskill.io:", emailContent)

    // For now, simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
      success: true,
      message: "Thank you for your consultation request! We'll get back to you within 24 hours.",
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Please check your form data and try again.",
        errors: error.errors,
      }
    }

    console.error("Consultation form error:", error)
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    }
  }
}
