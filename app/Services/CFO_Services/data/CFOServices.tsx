import {
  LineChart,
  PieChart,
  Wallet,
  Users,
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
    title: "Tax Planning",
    description:
      "Strategic tax planning that minimizes liabilities and maximizes after-tax returns through personalized, compliant solutions.We turn complexity into clarity—aligning your income, investments, and business structure for long-term financial efficiency.",
    expandedDescription: `
    At FinCon Research, our Tax Planning service is focused on helping you keep more of what you earn—by turning complex tax rules into smart, actionable strategies.
    We take a proactive approach to understanding your income streams, investments, business structure, and long-term goals. From there, we identify opportunities to minimize tax liabilities through optimized asset placement, income structuring, and entity planning.
    Whether it’s planning withdrawals, structuring compensation, or navigating capital gains, our strategies are designed to be both compliant and efficient. We also coordinate with your CA and legal advisors to ensure every aspect of your financial plan works in harmony.
    With FinCon Research, you don’t just plan for taxes—you plan for growth, unlocking liquidity and improving returns while staying ahead of regulatory changes.`,
  },
  {
    icon: <BadgeDollarSign className="w-6 h-6" />,
    title: "KPI Dashboard",
    description:
      "Real-time KPI dashboards that give business owners clear, actionable insights into financial performance and operational efficiency.From profitability to liquidity and leverage, we turn data into decisions that drive sustainable growth and discipline.",
    expandedDescription: `
    At FinCon Research, our KPI Dashboard offers business owners a real-time, visual overview of their company’s financial performance—empowering smarter, faster decision-making.
    This dashboard brings together key metrics across profitability, liquidity, working capital efficiency, and leverage, providing a holistic view of business health. From tracking turnover and net profitability to monitoring return on capital and debt-equity position, we ensure you have clarity on what’s driving—or draining—your business performance.
    Cash flow and liquidity indicators help you understand payment cycles, inventory holding, and receivables efficiency, while real-time gauges display the current status of debtors, creditors, and operational borrowing limits.
    With FinCon Research, this KPI Dashboard becomes a strategic tool—not just for reporting, but for identifying bottlenecks, enhancing financial discipline, and ultimately, driving improved profitability and sustainable growth.`,
  },
  {
    icon: <BadgeDollarSign className="w-6 h-6" />,
    title: "Business Optimization",
    description:
      "Transform paper wealth into real financial freedom through strategic business optimisation and capital efficiency.We help unlock trapped value, streamline operations, and convert business success into lasting personal wealth.",
    expandedDescription: `
    At FinCon Research, our Business Optimisation service is centered around one clear goal: transforming paper wealth into real, tangible wealth.
    Many business owners find themselves asset-rich on paper—through high valuations, receivables, or reinvested profits—but struggle to convert that into personal financial freedom. We help bridge that gap by analyzing your business’s financial ecosystem, identifying inefficiencies, and unlocking trapped capital.
    Through strategic planning, tax-efficient structuring, performance monitoring, and smarter capital allocation, we guide you in extracting value from your business without compromising growth. From optimizing working capital to streamlining cash flow and debt cycles, our approach turns numbers into actionable outcomes.
    With FinCon Research, your business becomes not just a source of revenue—but a well-structured engine for long-term, real wealth creation and personal financial independence.

    `,
  },
];

export default investmentServices;
