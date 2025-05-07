import {
  LineChart,
  PieChart,
  Wallet,
  Users,
  TrendingUp,
  BadgeDollarSign,
} from "lucide-react";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  expandedDescription: string;
}

const investmentServices: Service[] = [
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "Interactive Dashboards",
    description:
      "The Interactive Wealth Allocation Dashboard presents a clear view of asset distribution and performance through visuals like pie charts and key financial metrics. It aids in informed decision-making and strategic portfolio planning.",
    expandedDescription: `

          This Interactive Wealth Allocation Dashboard provides a clear visualization of how wealth is distributed across various asset classes, including Equity Investments, Debt Investments, Cash Savings, Precious Metals, Insurances, Alternative Assets, and Property.
          The pie chart gives an intuitive overview of portfolio allocation, while the accompanying table outlines each category with its respective contribution and growth rate. Additionally, the dashboard highlights key metrics such as total wealth, overall growth rate, and monthly passive income, making it an effective tool for strategic planning, diversification, and financial decision-making.

        `,
  },
  {
    icon: <PieChart className="w-6 h-6" />,
    title: "Investment Summary",
    description:
      "The Investment Summary Dashboard provides a comprehensive overview of asset distribution, ownership, risk exposure, and instrument types. It enables informed financial planning by detailing diversification, risk levels, and allocation across family members or entities.",
    expandedDescription: `
      
          This Investment Summary Dashboard provides a holistic view of asset distribution, ownership, risk exposure, and instrument allocation. The Asset Allocation section categorizes investments across Equity, Debt, Cash Equivalents, Precious Metals, Alternative Assets, and Property.
          The Sub-Asset chart offers further granularity, highlighting exposure to mutual funds, stocks, ETFs, savings instruments, and more. Ownership is clearly segmented under Name Proportion, identifying how assets are distributed among family members or entities.
          Risk is assessed in the Risk Allocation section, helping visualize the portfolio's exposure across different risk levels. The Instrument chart details the types of financial products held, providing insight into diversification across platforms and strategies.
          Together, these insights offer a comprehensive foundation for informed financial planning and investment decision-making.

        
    `,
  },
  {
    icon: <Wallet className="w-6 h-6" />,
    title: "Personal Wealth Mapping",
    description:
      "Personal Wealth Mapping offers a 360° view of your financial landscape by consolidating assets across categories with interactive, real-time dashboards. It empowers smarter decisions and long-term planning through insights on ownership, risk, and diversification.",
    expandedDescription: `
    Personal Wealth Mapping is a powerful, visual tool designed to give you complete clarity over your financial landscape. By consolidating all your assets—across equity, debt, property, cash equivalents, alternative assets, and more—our interactive dashboards provide a 360° view of your wealth.
    This dynamic solution breaks down investments by asset type, ownership, risk category, and instrument, helping you identify concentration, gaps, and diversification opportunities. With real-time insights into where your wealth resides and how it's performing, Personal Wealth Mapping empowers smarter financial decisions, optimized growth strategies, and long-term security.
    Whether you're managing family wealth or scaling your personal portfolio, this tool is the foundation for building financial clarity and confidence.

    `,
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Wealth Structuring",
    description:
      "FinCon Research’s Wealth Structuring service helps optimize your financial position through personalized strategies aligned with goals, tax planning, and legacy needs. By restructuring assets and ownership, we enhance clarity, returns, and long-term security for smarter wealth management.",
    expandedDescription: `
    
    At FinCon Research, our Wealth Structuring service is designed to help you organize, optimize, and elevate your financial position with precision and purpose.
    We work closely with you to create a personalized structure that aligns your wealth with your financial goals, tax planning strategies, and long-term legacy needs. By analyzing your current asset allocation, ownership patterns, and risk exposure, we restructure your holdings to improve clarity, legal protection, and intergenerational transfer.
    Our approach goes beyond just organization—we focus on unlocking higher returns by identifying underutilized assets, rebalancing investments, and enhancing overall efficiency. Whether it’s spreading ownership across entities, balancing risk levels, or building a more agile investment framework, FinCon Research ensures your wealth is working harder, smarter, and more securely for your future.


    `,
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "PITCH BOOKS",
    description:
      "We prepare highly impactful pitch presentations, with several graphs, charts, tables, and other visually appealing infographics. Our pitch books are used by investment banks while making pitch presentations to potential clients for advising them on M&A transactions.",
    expandedDescription: `
    Pitch books highlight the qualifications of an investment bank to advise on the transaction, given the bank’s understanding of the business and its previous involvement with similar deals. They discuss the investment banks experience & credentials, proposed strategy for completing the transaction, and the proposed timeline for completing the transaction process.
    `,
  },
  {
    icon: <BadgeDollarSign className="w-6 h-6" />,
    title: "Financial Advisory",
    description:
      "FinCon Research’s Financial Advisory service empowers entrepreneurs and professionals with tailored, strategic guidance to build long-term wealth and clarity. By aligning personal and business goals, we optimize capital, manage risk, and turn financial planning into a catalyst for growth and freedom.",
    expandedDescription: `
    At FinCon Research, our Financial Advisory service is built to guide entrepreneurs and professionals in making informed, strategic decisions that drive long-term wealth creation and financial clarity.
    We go beyond surface-level advice by deeply understanding your personal and business financial landscape. Our team provides tailored guidance across investments, liquidity planning, risk management, and goal alignment—ensuring every financial move supports your broader vision.
    Through in-depth analysis and proactive insights, we help you identify high-impact opportunities, avoid costly mistakes, and optimize your capital allocation. Whether you're navigating major life events, expanding your business, or planning for retirement, we act as your strategic partner—bringing clarity, confidence, and control to every decision.
    With FinCon Research by your side, your financial strategy becomes more than a plan—it becomes a catalyst for lasting growth and freedom.

    `,
  },
  {
    icon: <BadgeDollarSign className="w-6 h-6" />,
    title: "Risk Management",
    description:
      "FinCon Research’s Risk Management service safeguards your wealth through comprehensive assessment and strategic protection against market, legal, and personal risks. By aligning your risk profile with your goals, we ensure resilience, stability, and long-term financial success.",
    expandedDescription: `
    At FinCon Research, our Risk Management service is designed to protect and preserve your wealth while supporting sustainable growth.
    We begin by conducting a comprehensive assessment of your financial landscape—analyzing asset allocation, investment exposure, insurance coverage, and potential vulnerabilities. Our goal is to uncover hidden risks and implement strategies that balance opportunity with protection.
    Through smart diversification, contingency planning, and aligned insurance solutions, we help shield your wealth from market volatility, tax inefficiencies, legal liabilities, and unexpected life events. We also ensure your risk profile matches your goals and life stage, so your financial journey stays steady even through uncertainty.
    With FinCon Research, you gain peace of mind knowing your wealth is secure, resilient, and strategically positioned for long-term success.

    `,
  },
  {
    icon: <BadgeDollarSign className="w-6 h-6" />,
    title: "INDUSTRY RESEARCH",
    description:
      "We have a group of experienced industry analysts, who carry out in-depth research on a broad spectrum of industries, including some industries that are not very widely covered. We primarily rely on secondary resources for our industry research.",
    expandedDescription: `
    Our risk assessment service provides thorough analysis of potential investment risks and develops mitigation strategies. 
    We evaluate market risk, credit risk, liquidity risk, and other factors that could impact your portfolio, helping you make informed decisions while protecting your assets.
    `,
  },
  {
    icon: <BadgeDollarSign className="w-6 h-6" />,
    title: "BUSINESS RESEARCH",
    description:
      "We offer customized research on companies and businesses operating all over the globe. Research includes finding key personnel, revenue, no. of employees, competitors and contact details of the key members.",
    expandedDescription: `
    Our risk assessment service provides thorough analysis of potential investment risks and develops mitigation strategies. 
    We evaluate market risk, credit risk, liquidity risk, and other factors that could impact your portfolio, helping you make informed decisions while protecting your assets.
    `,
  },
];

export default investmentServices;
