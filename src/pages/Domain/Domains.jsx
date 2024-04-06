/* eslint-disable react/no-unescaped-entities */
import { FaQuestionCircle } from "react-icons/fa";

const Domains = () => {
    return (
        <div>
            <h4 className="text-xl font-medium mb-3">Domains</h4>
            <p className="flex items-center gap-2 mb-3"><FaQuestionCircle  className="text-orange-500"/> Why do I see Tilda logo on a grey background whn I open my website?</p>
            <p className="flex items-center gap-2 mb-3"><FaQuestionCircle  className="text-orange-500"/>How do I connect a custom domain?</p>
            <p className="flex items-center gap-2 mb-3"><FaQuestionCircle  className="text-orange-500"/>How do I connect multiple domain names to a single Tilda website?</p>
            <p className="flex items-center gap-2 mb-3"><FaQuestionCircle  className="text-orange-500"/>Howe do I create a custom business email address?</p>
            <p className="flex items-center gap-2 mb-3"><FaQuestionCircle  className="text-orange-500"/>Troubleshooting custom domain errors</p>
            <p className="flex items-center gap-2 mb-3"><FaQuestionCircle  className="text-orange-500"/>How do I connect a subdomain to my Tilda website</p>
            <p className="flex items-center gap-2 mb-3"><FaQuestionCircle  className="text-orange-500"/>How do I redirect from HTTP to HTTPS?</p>
            <p className="flex items-center gap-2 mb-3"><FaQuestionCircle  className="text-orange-500"/>How dp O remove "www" from a domain?</p>
            <p className="flex items-center gap-2 mb-3"><FaQuestionCircle  className="text-orange-500"/>How do I setup HTTps/SSL for a subdomain in Tilda?</p>
            <p className="flex items-center gap-2 mb-3"><FaQuestionCircle  className="text-orange-500"/>How do I set up my HTTPS / SSL certificate?</p>
            <p className="flex items-center gap-2 mb-3"><FaQuestionCircle  className="text-orange-500"/>How can I speed up (optimize) my Tilda website?</p>
        </div>
    );
};

export default Domains;