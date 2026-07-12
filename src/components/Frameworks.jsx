import { OrbitingCircles } from "./OrbitingCircles";

export default function Frameworks() {
  const skills = [
    "github",
    "cypress",
    "mysql-logo-svgrepo-com",
    "java-svgrepo-com",
    "css3",
    "visualstudiocode",
    "firebase-svgrepo-com",
    "git",
    "icons8-intellij-idea",
    "html5",
    "javascript",
    "icons8-browserstack-logo",
    "react",
    "postman",
    "tailwindcss",
    "icons8-selenium",
    "spring-boot",
    "playwright",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);