'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Database, BarChart3, Zap, Shield, Cloud, Workflow } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const capabilities = [
  {
    icon: Database,
    title: "Data Pipeline Architecture",
    description: "Scalable ETL/ELT pipelines for real-time and batch data processing.",
  },
  {
    icon: BarChart3,
    title: "Data Warehousing & Lakes",
    description: "Modern data storage solutions optimized for analytics and machine learning.",
  },
  {
    icon: Zap,
    title: "Real-time Analytics",
    description: "Stream processing and real-time data analytics for instant insights.",
  },
  {
    icon: Shield,
    title: "Data Governance",
    description: "Data quality, lineage, and compliance frameworks for enterprise data.",
  },
  {
    icon: Cloud,
    title: "Cloud Data Platforms",
    description: "Multi-cloud data solutions on AWS, Azure, GCP, and hybrid environments.",
  },
  {
    icon: Workflow,
    title: "Data Orchestration",
    description: "Automated workflows and scheduling for complex data operations.",
  },
]

const technologies = [
  "Apache Spark", "Apache Kafka", "Apache Airflow", "Snowflake", "Databricks",
  "AWS Redshift", "Google BigQuery", "Azure Synapse", "dbt", "Apache Beam",
  "Elasticsearch", "MongoDB", "PostgreSQL", "Redis", "Docker", "Kubernetes"
]

const useCases = [
  {
    title: "Customer 360 Data Platform",
    description: "Unified customer data platform processing 10TB+ daily across multiple touchpoints",
    industry: "Retail, Financial Services",
    impact: "360° customer view, 40% increase in personalization effectiveness",
  },
  {
    title: "Real-time Fraud Detection",
    description: "Stream processing system analyzing millions of transactions per second",
    industry: "Banking, Fintech",
    impact: "Sub-second fraud detection, 95% reduction in false positives",
  },
  {
    title: "IoT Data Analytics Platform",
    description: "Industrial IoT data processing for predictive maintenance and optimization",
    industry: "Manufacturing, Energy",
    impact: "50% reduction in equipment downtime, $2M+ annual savings",
  },
  {
    title: "Healthcare Data Integration",
    description: "HIPAA-compliant data platform integrating EHR, lab, and imaging data",
    industry: "Healthcare, Life Sciences",
    impact: "Improved patient outcomes, 30% faster clinical research",
  },
]

export default function DataEngineeringPage() {
  return (
    <div className="pt-20">
      {/* Hero Section with Background */}
      <section className="relative w-full pt-24 pb-32 overflow-hidden bg-white text-gray-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/bgmainhero.png"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
            Data Engineering
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700 leading-relaxed">
            Build scalable data infrastructure that transforms raw data into actionable insights. Our data engineering
            solutions power analytics, ML, and business intelligence at enterprise scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#0A6373] hover:bg-[#E66C6C]  text-white shadow-lg hover:shadow-xl" asChild>
              <Link href="/consultation">
                Get Data Strategy Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute -bottom-px left-0 w-full z-0">
          <svg viewBox="0 0 1440 325" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[60px] lg:h-[100px]">
            <path d="M810.109 190.723V324.906H1439.97V141.635C1399.11 107.824 1358.5 72.4044 1316.96 48.4386C1146.99 -48.5261 971.704 0.680438 810.109 190.723Z" fill="#0A6373"/>
            <path d="M654.316 239.05C706.182 255.407 756.402 284.718 808.124 302.496C881.8 327.838 958.526 329.369 1032.09 303.091C1103.57 277.612 1177.69 215.47 1248.33 183.899C1310.97 155.889 1379.36 144.355 1440 179.351V324.595H366.918V283.141C458.546 224.252 557.938 209.003 654.316 239.052V239.05Z" fill="#E66C6C"/>
            <path d="M0 185.047L29.9989 177.248C59.9979 169.739 119.996 153.704 179.994 165.586C239.991 177.029 299.989 216.391 359.987 239.498C419.985 263.043 479.983 270.332 539.981 262.824C599.979 255.025 659.976 231.699 719.974 212.237C779.972 193.066 839.97 177.03 899.968 188.911C959.966 200.355 1019.96 239.717 1079.96 251.162C1139.96 263.043 1199.96 247.007 1259.95 251.162C1319.95 255.028 1379.95 278.35 1409.95 290.013L1439.97 301.858L1439.95 325H0V185.047Z" fill="#ffffff"/>
          </svg>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate mb-6">Our Data Engineering Capabilities</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              From data ingestion to analytics-ready datasets, we build robust data infrastructure that scales with your
              business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate mb-3">{title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate mb-6">Technologies We Master</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We leverage the latest data engineering tools and platforms to build future-ready data solutions.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech) => (
              <div key={tech} className="px-4 py-2 bg-white rounded-full border border-gray-200 text-slate font-medium hover:border-primary hover:text-primary transition-colors cursor-default">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate mb-6">Real-World Data Engineering Success</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              See how our data engineering solutions have transformed businesses across industries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map(({ title, description, industry, impact }) => (
              <Card key={title} className="bg-white shadow-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-slate mb-4">{title}</h3>
                  <p className="text-neutral-600 mb-4 leading-relaxed">{description}</p>
                  <div className="text-sm text-primary font-medium mb-2">Industries: {industry}</div>
                  <div className="text-sm text-secondary font-medium">Impact: {impact}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Unlock Your Data's Potential?</h2>
            <p className="text-xl mb-8 text-white/90">
              Let's build a data infrastructure that scales with your ambitions and delivers insights that drive growth.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link href="/consultation">
                Start Your Data Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
