import { FacebookIcon, GithubIcon, GmailIcon, LinkedinIcon } from "./Icon";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-3 max-xs:gap-x-[1vw] justify-around">
      <a href="https://github.com/alecblance">
        <GithubIcon className="w-6 h-6 mx-1 max-xs:w-5 max-xs:h-5" />
      </a>
      <a href="mailto:blancealec1@gmail.com">
        <GmailIcon className="w-6 h-6 mx-1 max-xs:w-5 max-xs:h-5" />
      </a>
      <a href="https://www.linkedin.com/in/alecblance/">
        <LinkedinIcon className="w-6 h-6 mx-1 max-xs:w-5 max-xs:h-5" />
      </a>
      <a href="https://facebook.com/alec.blance">
        <FacebookIcon className="w-6 h-6 mx-1 max-xs:w-5 max-xs:h-5" />
      </a>
    </div>
  );
};
export default Socials;
