import ProjectCard from "../ProjectCard";
import Keyword from "../Keyword";
import { useLanguage } from "../../i18n";

const mainArtImg = new Image();
mainArtImg.src = "/rider.png";

function GamificationRiderPlugin() {
  const { tr } = useLanguage();

  return (
    <ProjectCard
      projectTitle="Gamification Rider Plugin"
      projectDescription={tr({
        fr: "Un plugin qui ajoute des éléments de gamification à l'IDE Rider.",
        en: "A plugin to add gamification elements to the Rider IDE.",
      })}
      projectKeywords={["Kotlin", "Rider", "IDE Plugin"]}
      projectImage={mainArtImg.src}
      projectPopUpContent={
        <div>
          <h2>Gamification Rider Plugin</h2>
          <Keyword keyword="Kotlin" />
          <Keyword keyword="Rider" />
          <Keyword keyword="IDE Plugin" />

          <p>
            {tr({
              fr: "J'ai commencé à développer ce plugin pour l'IDE JetBrains Rider afin d'ajouter des éléments de gamification à l'expérience de programmation. Il s'inspire du plugin « Ridiculous Coding » pour Visual Studio Code : je voulais retrouver une expérience similaire quand j'utilise Rider (et c'était aussi une bonne excuse pour me mettre au développement de plugins).",
              en: 'This project is a plugin I just started developing for the JetBrains Rider IDE to add gamification elements to the coding experience. It is inspired by the "Ridiculous Coding" plugin for Visual Studio Code, and I wanted to create a similar experience for when i use Rider. ( it was also a good excuse to get into developing plugins )',
            })}
          </p>

          <p
            style={{
              paddingBottom: "5px",
              borderBottom: "var(--default-border-color) 1px solid",
            }}
          >
            {tr({
              fr: "Pour l'instant, le plugin gère uniquement un système d'expérience : l'utilisateur gagne des points en codant et monte de niveau. Je prévois d'ajouter d'autres fonctionnalités, comme des succès et d'autres éléments de gamification, pour rendre la programmation plus ludique et motivante.",
              en: "For now the plugin only handles an xp system that rewards the user with experience points for coding, and levels up as they gain xp. I am planning to add more features in the future, such as achievements, and more gamification elements to make coding more fun and engaging.",
            })}
          </p>
          <img
            src="/gamification-picture.png"
            alt={tr({
              fr: "Aperçu du plugin Gamification pour Rider",
              en: "Gamification Rider Plugin preview",
            })}
            style={{
              maxHeight: "300px",
              boxShadow: " 0 6px 20px rgba(255, 0, 0, 0.19)",

              border: "1px solid",
              borderColor: "var(--default-border-color)",
              marginBottom: "15px",
            }}
          ></img>

          <p
            style={{
              borderTop: "var(--default-border-color) 1px solid",
            }}
          >
            {tr({
              fr: "J'aimerais surtout implémenter des systèmes qui encouragent les pratiques sur lesquelles je veux progresser, comme tester plus souvent ou utiliser les fonctionnalités avancées de l'IDE, pour me pousser à m'améliorer dans ces domaines.",
              en: "I especially would like to implement systems that incentivize things that I want to get better at, such as testing more often, or using more advanced features of the IDE, to push myself to improve in those areas.",
            })}
          </p>

          <p>
            {tr({
              fr: "Je le publierai sur mon GitHub quand je serai prêt à le partager. En attendant, si vous voulez l'essayer, n'hésitez pas à me contacter !",
              en: "I will make it available on my github once i feel confortable sharing it. For now, if you are interested in trying it out, feel free to reach out to me !",
            })}
          </p>
          <p>
            {tr({
              fr: "Le développement vient de commencer, il n'y a donc pas encore grand-chose à montrer, mais j'ai hâte de voir où ce projet va me mener et de le partager.",
              en: "I only started developing it recently, so there is not much to show for now, but I am excited to see where this project goes and to share it with others in the future.",
            })}
          </p>
        </div>
      }
    />
  );
}

export default GamificationRiderPlugin;
