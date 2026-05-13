export default function Portfolio() {
  const projects = [
    {
      title: "Real-Time Face Segmentation for Movie Cast Identification",
      description:
        "Built a real-time face segmentation and identification system using OpenCV and Streamlit for movie cast detection and visualization.",
      tech: ["Python", "OpenCV", "Computer Vision", "Streamlit"],
      github: "https://github.com/Sedhuk/face-segmentation.git",
    },
    {
      title: "IMDb Recommendation System",
      description:
        "Developed a movie recommendation engine using NLP, TF-IDF vectorization, and cosine similarity techniques.",
      tech: ["Python", "NLP", "TF-IDF", "Streamlit"],
      github: "https://github.com/Sedhuk/imdb-movie-recommender.git",
    },
    {
      title: "Swiggy Recommendation System",
      description:
        "Performed EDA and built a restaurant recommendation system based on cuisines, ratings, and pricing.",
      tech: ["Python", "Pandas", "EDA", "Scikit-learn"],
      github: "https://github.com/Sedhuk/Swiggy-Recommendation.git",
    },
    {
      title: "Nutri Classification",
      description:
        "Machine learning based nutrition classification project focused on intelligent food categorization and prediction.",
      tech: ["Python", "Machine Learning", "Classification"],
      github: "https://github.com/Sedhuk/NutriClass.git",
    },
    {
      title: "Stock Market Analysis",
      description:
        "Analyzed stock market datasets and generated insights through visualization and trend analysis.",
      tech: ["Python", "Data Analysis", "Visualization"],
      github: "https://github.com/Sedhuk/Stock-Market-Analysis.git",
    },
  ];

  const skills = [
    "Python",
    "SQL",
    "Pandas",
    "NumPy",
    "Machine Learning",
    "NLP",
    "OpenCV",
    "Streamlit",
    "React.js",
    "GitHub",
    "Data Visualization",
    "Scikit-learn",
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#1e3a8a,transparent_35%),radial-gradient(circle_at_bottom_left,#7c3aed,transparent_30%)] opacity-30"></div>

      <div className="relative z-10 px-6 md:px-16 py-10">
        <section className="grid md:grid-cols-2 gap-10 items-center min-h-[90vh]">
          <div>
            <p className="text-cyan-400 text-sm uppercase tracking-[0.3em] mb-4">
              Data Science Portfolio
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Sedhu
              <span className="text-cyan-400"> Madhavan</span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
              Aspiring Data Scientist
            </h2>

            <p className="text-lg text-gray-400 leading-8 max-w-xl mb-8">
              Building intelligent systems using Data Science, Machine
              Learning, and Python. Experienced in Customer Success
              Engineering and Frontend Web Application Development with strong
              analytical and problem-solving skills.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/Sedhuk"
                target="_blank"
                className="px-6 py-3 rounded-2xl bg-cyan-500 text-black font-semibold hover:scale-105 transition"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/sedhuk001"
                target="_blank"
                className="px-6 py-3 rounded-2xl border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-black transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl shadow-2xl">
              <h3 className="text-4xl font-bold text-cyan-400">4+</h3>
              <p className="text-gray-400 mt-2">Years Experience</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl shadow-2xl">
              <h3 className="text-4xl font-bold text-purple-400">5+</h3>
              <p className="text-gray-400 mt-2">Projects</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl shadow-2xl">
              <h3 className="text-4xl font-bold text-green-400">DS</h3>
              <p className="text-gray-400 mt-2">Machine Learning</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl shadow-2xl">
              <h3 className="text-4xl font-bold text-pink-400">AI</h3>
              <p className="text-gray-400 mt-2">Computer Vision</p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <h2 className="text-4xl font-bold mb-10 text-cyan-400">Skills</h2>

          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="px-5 py-3 rounded-2xl bg-white/5 border border-cyan-400/20 text-cyan-200"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section className="py-20">
          <h2 className="text-4xl font-bold mb-10 text-cyan-400">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
              >
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-8 mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-xl text-sm bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  className="inline-block px-5 py-3 rounded-2xl bg-cyan-500 text-black font-semibold"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
