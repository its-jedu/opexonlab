import React from "react";
import {
  Code,
  Smartphone,
  Database,
  Cloud,
  TrendingUp,
  BarChart3,
  Users,
  Shield,
  Workflow,
  Zap,
  Target,
  Monitor,
  Settings,
} from "lucide-react";

const services = [
  {
    title: "Custom Software Development",
    subtitle: "Code to Scale",
    description:
      "Build custom software solutions that perfectly align with your business requirements. Our full-stack development team creates scalable web applications, mobile apps, and enterprise software tailored to your needs.",
    features: [
      {
        text: "Web Applications (React, Node.js, Python)",
        icon: <Monitor className="w-4 h-4 text-[#38A109]" />,
      },
      {
        text: "Mobile Apps (iOS & Android)",
        icon: <Smartphone className="w-4 h-4 text-[#38A109]" />,
      },
      {
        text: "Database Design & API Development",
        icon: <Database className="w-4 h-4 text-[#38A109]" />,
      },
      {
        text: "Cloud-Native Architecture",
        icon: <Cloud className="w-4 h-4 text-[#38A109]" />,
      },
    ],
  },
  {
    title: "Digital Transformation Consulting",
    subtitle: "Strategic Growth",
    description:
      "Navigate your digital transformation journey with expert guidance. We help organizations optimize business workflows and implement digital strategies that drive sustainable competitive advantage.",
    features: [
      {
        text: "Digital Strategy & Roadmapping",
        icon: <Target className="w-4 h-4 text-[#38A109]" />,
      },
      {
        text: "Legacy System Modernization",
        icon: <Settings className="w-4 h-4 text-[#38A109]" />,
      },
      {
        text: "Change Management & Training",
        icon: <Users className="w-4 h-4 text-[#38A109]" />,
      },
      {
        text: "Security Compliance Assessment",
        icon: <Shield className="w-4 h-4 text-[#38A109]" />,
      },
    ],
  },
  {
    title: "Process Automation",
    subtitle: "Efficiency",
    description:
      "Streamline operational tasks and simplify operations with intelligent automation solutions. Reduce manual effort, minimize errors, and boost productivity.",
    features: [
      {
        text: "Workflow Process Automation",
        icon: <Workflow className="w-4 h-4 text-[#38A109]" />,
      },
      {
        text: "Data Processing & Integration",
        icon: <Database className="w-4 h-4 text-[#38A109]" />,
      },
      {
        text: "Business Intelligence Tools",
        icon: <BarChart3 className="w-4 h-4 text-[#38A109]" />,
      },
      {
        text: "Performance Optimization",
        icon: <Zap className="w-4 h-4 text-[#38A109]" />,
      },
    ],
  },
  {
    title: "IT Support & Maintenance",
    subtitle: "24/7 Reliability",
    description:
      "Keep your systems running smoothly with proactive support and comprehensive maintenance services. Our technical team ensures optimal system performance and rapid issue resolution.",
    features: [
      {
        text: "24/7 System Monitoring",
        icon: <Monitor className="w-4 h-4 text-[#38A109]" />,
      },
      {
        text: "Security Updates & Patches",
        icon: <Shield className="w-4 h-4 text-[#38A109]" />,
      },
      {
        text: "Performance Optimization",
        icon: <Zap className="w-4 h-4 text-[#38A109]" />,
      },
      {
        text: "Technical Support & Training",
        icon: <Users className="w-4 h-4 text-[#38A109]" />,
      },
    ],
  },
];

const Service = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
      <div className="max-w-7xl py-12 sm:py-16 mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Our Services
          </h1>
          <p className="text-black text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology services designed to accelerate your
            business growth and digital transformation journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border-2 border-[#38A109] shadow-lg p-4 sm:p-6 md:p-8 transition-transform hover:scale-[1.02] hover:shadow-xl focus-within:shadow-xl duration-300"
              role="article"
              aria-labelledby={`service-title-${index}`}
            >
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div>
                  <h3
                    id={`service-title-${index}`}
                    className="text-base sm:text-lg md:text-xl font-semibold text-black"
                  >
                    {service.title}
                  </h3>
                  <p className="text-sm text-black rounded-xl border border-[#38A109] w-fit px-3 py-1 mt-2">
                    {service.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-black text-sm sm:text-base mb-6 md:mb-8 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-3 md:space-y-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    {feature.icon}
                    <span className="text-sm sm:text-base text-black">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 md:mt-8">
                <button
                  className="w-full py-2 px-4 text-base font-medium text-[#38A109] border border-[#38A109] rounded-lg hover:bg-[#38A109] hover:text-white focus:bg-[#38A109] focus:text-white transition-colors duration-200"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
