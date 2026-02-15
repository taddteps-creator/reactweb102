import { faGit, faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import picExp from '../../assets/Expic1.png'
import picExp2 from '../../assets/Expic2.png'
import { useState } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import FormattedDate from "../../components/FomattedDate";
import Picture from "../../components/Picture";
import TitleLink from "../../components/TitleLink";
import Material from "../../components/Material";
import Description from "../../components/Description";
import Tech from "../../components/Tech";


const Experience = () => {
    const [isMouseEnter, setIsMouseEnter] = useState(false);

    return (
        <div className="">
            <div className="text-primaryAccent font-medium">Experience</div>
            <div className={`grid grid-cols-[25%_75%]  rounded px-2 py-6 transition-all ${isMouseEnter['exp1'] ? "bg-gray-200" : ""}`}
                onMouseEnter={() => setIsMouseEnter({ 'exp1': true })}
                onMouseLeave={() => setIsMouseEnter({ 'exp1': false })}
            >
                <div>
                    <FormattedDate isHighlight={isMouseEnter['exp1']}>2024-202</FormattedDate>
                    <Picture picture={picExp} title="Fullstack" />
                </div>
                <div className="grid gap-y-4">
                    <TitleLink isHighlight={isMouseEnter['exp1']} title="Fullstack" link="https://github.com/taddteps-creator/reactweb102" />
                    <div className="flex gap-4 text-xl" >
                        <Material icon={faGithub} link="https://github.com/taddteps-creator/reactweb102" />
                        <Material icon={faYoutube} link="https://www.youtube.com/@%E0%B8%97%E0%B8%B1%E0%B8%94%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B9%81%E0%B8%8B%E0%B9%88%E0%B8%88%E0%B8%B2%E0%B8%87" />
                    </div>
                    <Description description="Designing and developing a sports data analysis system that scrapes data from various sports websites, processes it, and presents different profit-making possibilities in real-time for customers." />
                    
                    <div >
                       <Tech isHighlight={isMouseEnter['exp1']} data={['React', 'Next']} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;