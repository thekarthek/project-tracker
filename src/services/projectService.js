const projects = [
  {
    id: "1",
    name: "Mobile App Development",
    clientName: "ABC Corp",
    description: "Developing a cross-platform mobile app.",
    status: "active",
  },
  {
    id: "2",
    name: "Website Redesign",
    clientName: "XYZ Ltd",
    description: "Redesigning corporate website UI/UX.",
    status: "completed",
  },
  {
    id: "3",
    name: "Backend API Integration",
    clientName: "Tech Solutions",
    description: "Integrating backend APIs with frontend.",
    status: "active",
  },
];

export const getProjects = () => {
  return projects;
};

export const getProjectById = (id) => {
  return projects.find((project) => project.id === id);
};
