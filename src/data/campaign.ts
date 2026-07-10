export const campaign = {
  name: "Carmen Morales for Assembly",
  shortName: "Carmen Morales",
  office: "New Jersey State Assembly",
  district: "Legislative District 34",
  description:
    "A modern campaign website for Carmen Morales, focused on community, opportunity, affordability, and responsive public service.",
  email: "info@morales4assembly.com",
};

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (path: string) => `${publicBasePath}${path}`;

export const campaignImages = {
  hero: asset("/images/campaign/hero-carmen.jpg"),
  about: asset("/images/campaign/about-chamber.jpg"),
  community: asset("/images/campaign/community-cooking.jpg"),
  townhall: asset("/images/campaign/townhall.jpg"),
  volunteers: asset("/images/campaign/volunteers.jpg"),
  podium: asset("/images/campaign/podium.jpg"),
  coalition: asset("/images/campaign/coalition.jpg"),
  capitol: asset("/images/campaign/capitol.jpg"),
  press: asset("/images/campaign/press.jpg"),
  education: asset("/images/campaign/education.jpg"),
} as const;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Issues", href: "/issues" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "News", href: "/news" },
];

export const pages = {
  home: {
    title: "Progress Rooted in Community",
    summary:
      "Carmen Morales is building a campaign that listens first and delivers practical results for families, students, seniors, workers, and small businesses.",
  },
  about: {
    title: "Meet Carmen Morales",
    summary:
      "A public servant, community advocate, and neighbor committed to transparent leadership for Legislative District 34.",
  },
  issues: {
    title: "Our Vision for the Future",
    summary:
      "The campaign is focused on affordability, education, public safety, healthcare access, housing, transportation, and an economy that works for working families.",
  },
  events: {
    title: "Upcoming Events",
    summary:
      "Join town halls, canvasses, community conversations, and volunteer days across the district.",
  },
  volunteer: {
    title: "Volunteer With Team Morales",
    summary:
      "Every conversation matters. Help reach voters online, by phone, at doors, and in the community.",
  },
  donate: {
    title: "Support the Vision",
    summary:
      "Your contribution helps power voter outreach, field organizing, digital communications, and community events.",
  },
  endorsements: {
    title: "Building a Coalition",
    summary:
      "Neighbors, community leaders, advocates, educators, and public servants are standing with Carmen Morales.",
  },
  news: {
    title: "News & Media",
    summary:
      "Campaign updates, press resources, event recaps, and field notes from across the district.",
  },
} as const;

export const priorities = [
  {
    title: "Education First",
    label: "Schools",
    summary:
      "Invest in strong public schools, support educators, expand career pathways, and make sure every student has the tools to succeed.",
  },
  {
    title: "Affordability & Opportunity",
    label: "Families",
    summary:
      "Lower everyday costs, support small businesses, and advance policies that help working families stay and thrive in New Jersey.",
    featured: true,
  },
  {
    title: "Healthy, Safe Communities",
    label: "Care",
    summary:
      "Improve access to healthcare, protect seniors and vulnerable residents, and keep neighborhoods safe through prevention and partnership.",
  },
];

export const issueAreas = [
  "Education",
  "Public Safety",
  "Healthcare",
  "Economy & Taxes",
  "Housing",
  "Transportation",
];

export const events = [
  {
    title: "City Center Town Hall",
    date: "July 24",
    time: "6:30 PM",
    location: "Bloomfield Community Center",
    summary:
      "A community conversation on affordability, public education, and responsive state government.",
  },
  {
    title: "Weekend Canvass Launch",
    date: "July 27",
    time: "10:00 AM",
    location: "Campaign Field Office",
    summary:
      "Meet fellow volunteers, pick up walk packets, and help talk with voters across the district.",
  },
  {
    title: "Small Business Roundtable",
    date: "August 3",
    time: "9:30 AM",
    location: "Downtown Business Corridor",
    summary:
      "A focused discussion with local entrepreneurs on costs, workforce needs, and neighborhood investment.",
  },
];

export const newsItems = [
  {
    title: "Team Morales Launches Districtwide Listening Tour",
    date: "Campaign Update",
    image: campaignImages.townhall,
    summary:
      "The campaign will host conversations with residents, educators, small business owners, and local advocates.",
  },
  {
    title: "Volunteers Kick Off Weekend Voter Outreach",
    date: "Field Note",
    image: campaignImages.volunteers,
    summary:
      "Supporters gathered to talk with voters about affordability, education, and the future of the district.",
  },
  {
    title: "Press Kit and High-Resolution Photos Available",
    date: "Media Advisory",
    image: campaignImages.press,
    summary:
      "Members of the press can request official biography details, campaign statements, and media assets.",
  },
];

export const endorsements = [
  "Educators and school advocates",
  "Labor and working-family leaders",
  "Neighborhood organizers",
  "Small business owners",
  "Healthcare and senior-care advocates",
  "Local public servants",
];
