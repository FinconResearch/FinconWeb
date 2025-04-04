
import {

    LineChart,
    PieChart,
    Wallet,
    Users,
    TrendingUp,
    BadgeDollarSign, 

  } from "lucide-react"
  
  interface Service {
    icon: React.ReactNode
    title: string
    description: string
    expandedDescription: string
    imageUrl: string
  }
  
const serviceImages = {
  marketAnalysis: "/AboutUsimage.jpg",
  portfolioManagement: "/AboutUsimage.jpg",
  wealthPlanning: "/AboutUsimage.jpg",
  investmentAdvisory: "/AboutUsimage.jpg",
  performanceTracking: "/AboutUsimage.jpg",
  riskAssessment: "/AboutUsimage.jpg",
};

const investmentServices: Service[] = [
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Market Analysis",
      description: "Comprehensive market research and trend analysis for informed investment decisions.",
      expandedDescription:
        "Our market analysis service provides in-depth research on market trends, economic indicators, and sector performance. We analyze historical data and current market conditions to identify potential investment opportunities and risks, helping you make data-driven decisions for your portfolio.",
      imageUrl: serviceImages.marketAnalysis,
    },
    {
      icon: <PieChart className="w-6 h-6" />,
      title: "Portfolio Management",
      description: "Strategic portfolio diversification and risk management services.",
      expandedDescription:
        "Our portfolio management service offers comprehensive oversight of your investments. We implement strategic asset allocation, regular rebalancing, and continuous monitoring to ensure your portfolio remains aligned with your financial goals while managing risk effectively.",
      imageUrl: serviceImages.portfolioManagement,
    },
    {
      icon: <Wallet className="w-6 h-6" />,
      title: "Wealth Planning",
      description: "Personalized wealth management and investment strategies.",
      expandedDescription:
        "Our wealth planning service takes a holistic approach to your financial well-being. We develop personalized strategies that consider your current financial situation, future goals, tax implications, and estate planning needs to create a comprehensive roadmap for building and preserving wealth.",
      imageUrl: serviceImages.wealthPlanning,
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Investment Advisory",
      description: "Expert guidance on investment opportunities and market timing.",
      expandedDescription:
        "Our investment advisory service provides expert guidance on investment selection, asset allocation, and market timing. Our advisors work closely with you to understand your risk tolerance and financial objectives, offering tailored recommendations to optimize your investment strategy.",
      imageUrl: serviceImages.investmentAdvisory,
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Performance Tracking",
      description: "Real-time monitoring and reporting of investment performance.",
      expandedDescription:
        "Our performance tracking service offers real-time monitoring and comprehensive reporting of your investment performance. We provide detailed analytics, benchmark comparisons, and regular performance reviews to help you understand how your investments are performing and where adjustments may be needed.",
      imageUrl: serviceImages.performanceTracking,
    },
    {
      icon: <BadgeDollarSign className="w-6 h-6" />,
      title: "Risk Assessment",
      description: "Detailed risk analysis and mitigation strategies for investments.",
      expandedDescription:
        "Our risk assessment service provides thorough analysis of potential investment risks and develops mitigation strategies. We evaluate market risk, credit risk, liquidity risk, and other factors that could impact your portfolio, helping you make informed decisions while protecting your assets.",
      imageUrl: serviceImages.riskAssessment,
    },
  ]

export default investmentServices;
