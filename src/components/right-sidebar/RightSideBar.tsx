import { ReactNode } from "react";
import About from "./about/About";
import UsersSection from "./users-section/UsersSection";

interface Props {
    sectionName?: string
    children?: ReactNode
}

const RightSideBar: React.FC<Props> = ({children, sectionName}) => {
    return (
        <div className="hidden xl:block" aria-label="Right Sidebar">
            <div className="sticky top-6 max-h-auto">
                <section aria-label="Publicity Section">
                    {children}
                </section>
                {sectionName && <section aria-label="Suggested Users">
                    <UsersSection sectionName={sectionName}  />
                </section>}
                <section aria-label="About Section" className="mt-[-32px] m-6">
                    <About />
                </section>
            </div>
        </div>
    );
};

export default RightSideBar;
