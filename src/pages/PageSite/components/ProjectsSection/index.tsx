import { IIsMobileState } from "@/interfaces/IIsMobileState";
interface IProps extends IIsMobileState {}

export const ProjectsSection = ({ isMobile }: IProps) => {
  return (
    <div className="additional-content">
      <h2 className="additional-content-title">My Recent Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>AI-Powered Analytics Platform</h3>
          <p>
            Built a dashboard that processes and visualizes complex data using
            machine learning algorithms.
          </p>
        </div>
        <div className="project-card">
          <h3>E-commerce Mobile App</h3>
          <p>
            Designed and developed a cross-platform shopping application with
            real-time inventory updates.
          </p>
        </div>
        <div className="project-card">
          <h3>Healthcare Management System</h3>
          <p>
            Created a secure platform for healthcare providers to manage patient
            records and appointments.
          </p>
        </div>
      </div>
    </div>
  );
};
