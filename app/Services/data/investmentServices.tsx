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
  expandedDescription: React.ReactNode;
}

const investmentServices: Service[] = [
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "FULL TIME ANALYST",
    description:
      "Our full-time analysts work as part of extended client team. In an FTE engagement, our analysts work exclusively for the client on a full-time basis and give continuous support, helping clients to control and prioritize projects better.",
    expandedDescription: (
      <p>
        <p className="mb-4">
          Full time analyst provides flexibility to the client with quick
          turnaround times, especially when there are frequent and ad hoc work
          requirements. Our analysts are equipped with multiple skillsets and
          can be utilized for various work requirements in the finance domain.
        </p>
        <p>
          Full time analyst can be hired on a monthly, quarterly or annual basis
          allowing clients to scale their business without making long-term
          investments.
        </p>
      </p>
    ),
  },
  {
    icon: <PieChart className="w-6 h-6" />,
    title: "INFORMATION MEMOS (CIMs)",
    description:
      "We prepare highly impactful Confidential Information Memorandums (CIMs) to help businesses and investment banks effectively present investment opportunities to potential investors and suitors.",
    expandedDescription: (
      <p>
        <p>
          CIMs include information on several aspects of the business, including
          basic description, operational details, Sales & Marketing information,
          financial information and Management & Team information. We prepare
          CIMs in presentation- or document-style and our CIMs have several
          graphs, charts, tables, and other visually appealing infographics.
        </p>
      </p>
    ),
  },
  {
    icon: <Wallet className="w-6 h-6" />,
    title: "FINANCIAL MODELING",
    description:
      "We prepare detailed financial models in both, MS Excel and Modano®, for investment banks, PE funds, Startups and Corporations. These financial models are of various type, depending on their end use.",
    expandedDescription: `
    They may be used for M&A/ fund raising transactions, PE waterfall determination, business planning/target setting, internal business evaluation, and budgeting.
    A standard three statement financial model includes Income Statement, Balance Sheet, Cash Flow Statement, Assumptions, and Schedules. We normally follow a bottom-up approach to build financial models, where we start by identifying key revenue and cost drivers and then work out the growth assumptions. In addition to these statements, we can also carry out further analyses, including, Key Ratios, DuPont, Breakeven and Payback Analyses; if required.
    `,
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "M&A DEAL SUPPORT",
    description:
      "We provide end-to-end M&A and fund-raising support to startups, corporations and investment banks. Our transaction support process starts with a detailed assessment of the client business, including key value drivers, growth potential and financial details.",
    expandedDescription: `
    Based on this understanding, we create a description of well-suited suitors/investors and carry out an extensive research to create a list of investors who may be interested in the transaction. We help companies establish contact with potential investors and join them in discussions with investors. Once the discussions reach advanced stages, we help businesses negotiate the final terms of the transaction and close the transaction on their behalf. In case of buy-side transactions, we also conduct in-depth financial due diligence of the target on behalf of the acquirer.
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
    title: "BUSINESS VALUATION",
    description:
      "We prepare intricate business valuation models using a combination of the commonly used valuation methodologies.  These include DCF Valuation, Comparable Company Valuation (both listed and transaction comparables), and Sum of The Parts (SOTP) Valuation.",
    expandedDescription: `
    We start the valuation process by thoroughly reviewing the subject business and developing a granular understanding of its operations and key value drivers.
    
    These insights are used as the basis for projecting the company’s cash flows and carrying out the DCF analysis. In case of comparables analysis, these insights are used to identify listed businesses that are similar to the target business, or to identify M&A transaction that involved similar businesses. The Identified businesses / transactions are assigned weights based on their similarity with the subject business and appropriate valuation multiples are calculated based on these weights.
    
    We compile the results of the valuation exercise in a Valuation Report that elaborates the assumptions used for the valuation process, the approach followed for the valuation process and the key conclusions.
    `,
  },
  {
    icon: <BadgeDollarSign className="w-6 h-6" />,
    title: "EQUITY RESEARCH",
    description:
      "We provide full Equity Research reports including coverage initiation reports and periodic updates. Our reports are research intensive with in-depth analysis aiding portfolio managers in the investment process.",
    expandedDescription: `
    Our risk assessment service provides thorough analysis of potential investment risks and develops mitigation strategies. 
    We evaluate market risk, credit risk, liquidity risk, and other factors that could impact your portfolio, helping you make informed decisions while protecting your assets.
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
