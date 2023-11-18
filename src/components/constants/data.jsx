import stress from "../../assets/stress-test.png";
import anxious from "../../assets/anxious-test.png";
import sleep from "../../assets/sleep-test.png";
import sad from "../../assets/sad-test.png";
import workplace from "../../assets/workplace-test.png";
import happiness from "../../assets/happy-test.png";

export const API_URL = "https://mental-health-backend-jeetkanodia.vercel.app";

export const categories = [
  { id: 1, type: "Depression" },
  { id: 6, type: "Stress" },
  { id: 2, type: "PTSD" },
  { id: 3, type: "Molestation" },
  { id: 4, type: "Anxiety" },
  { id: 5, type: "Stories" },
];

export const Tests = [
  {
    id: 1,
    heading: "Am i stressed",
    description:
      "Explore how stress has been taking a toll on your well-being. Take the assessment today!",
    img: stress,
    link: "/taketest/stress",
  },
  {
    id: 2,
    heading: "Am I Sad Or Depressed?",
    description:
      "Is it more than just feeling low? Take the assessment to find out.",
    img: sad,
    link: "/taketest/sad",
  },
  {
    id: 3,
    heading: "How am I sleeping ?",
    description:
      "Are you getting the quality sleep you deserve? Know today by taking the assessment.",
    img: sleep,
    link: "/taketest/sleep",
  },
  {
    id: 4,
    heading: "Am I Anxious?",
    description:
      "Anxiety jitters never leave you. Take the self-check today to understand your anxiety better.",
    img: anxious,
    link: "/taketest/anxious",
  },
  {
    id: 5,
    heading: "Happiness Scale",
    description: "Are you happy? Know today by taking the assessment.",
    img: happiness,
    link: "/taketest/happiness",
  },
  {
    id: 6,
    heading: "Workplace Stress Test",
    description:
      "Are you getting sick-listed due to work-related stress? Know today by taking the assessment",
    img: workplace,
    link: "/taketest/workplace",
  },
];

export const resultCardData = [
  {
    heading: "Score of 0-4",
    description:
      "Your level of depression and sadness is low. However, everyone feels sad or blue at times. You can take action to protect your mental health for up-to 7 days on your own.",
  },
  {
    heading: "Score of 5-9",
    description:
      "Your level of depression and sadness is moderate. If your symptoms continue, consider speaking to a mental health professional.",
  },
  {
    heading: "Score of 10-14",
    description:
      "Your level of depression and sadness is high. You should strongly consider talking to a mental health professional.",
  },
];
