import S1 from "../services/services1.jpg";
import S2 from "../services/services2.jpg";
import S3 from "../services/services3.jpg";
import S4 from "../services/services4.jpg";
import S5 from "../services/services5.jpg";
import S6 from "../services/services6.jpg";

export const ServiceData = [
  {
    title: "Recruitment",
    imgpath: S1, // ✅ Use imported image directly
    desc: "Recruitment refers to the overall process of identifying, sourcing, screening, shortlisting, and interviewing candidates for jobs within an organization."
  },
  {
    title: "Permanent Staffing",
    imgpath: S2, // ✅ Fixed image reference
    desc: "Our talent acquisition process is efficiently to support you in finding the right fit for your organization for permanent staffing."
  },
  {
    title: "Contract Staffing",
    imgpath: S3, // ✅ Use correct image
    desc: "SHSPL provides qualified people you need, when you need them and only for as long as you need them."
  },
  {
    title: "Payroll Processing",
    imgpath: S4,
    desc: "Keeping your company's payroll up-to-date and accurate is an important responsibility for any business or organization."
  },
  {
    title: "Training and Development",
    imgpath: S5,
    desc: "Educational activities within an organization that are designed to improve the job performance of an individual or group."
  },
  {
    title: "Business Planning, Strategy & Execution",
    imgpath: S6,
    desc: "Execution is the single most important part of the whole process, poor execution can result in a lot of lost time and money."
  }
];
