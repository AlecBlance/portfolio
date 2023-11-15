import { FacebookIcon, GithubIcon, GmailIcon, LinkedinIcon } from "./Icon";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-3 justify-around">
      <a href="/">
        <GithubIcon className="w-6 h-6 mx-1" />
      </a>
      <a href="/">
        <GmailIcon className="w-6 h-6 mx-1" />
      </a>
      <a href="/">
        <LinkedinIcon className="w-6 h-6 mx-1" />
      </a>
      <a href="/">
        <FacebookIcon className="w-6 h-6 mx-1" />
      </a>
    </div>
  );
};
export default Socials;
